import uuid
from django.db import models
from django.urls import reverse
from accounts.models import Client
from django_countries.fields import CountryField
from django.contrib.auth import get_user_model
from django.utils.text import slugify

from utils.enum import CaseStatus, DocumentType
from utils.mixins import AddressAndPhoneNumberMixin, SlugMixin, TimestampMixin

User = get_user_model()



def generate_case_number():
    return f"CASE-{uuid.uuid4().hex[:6].upper()}"

class CaseType(SlugMixin, TimestampMixin, models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title


class Case(SlugMixin, TimestampMixin, models.Model):
    case_number = models.CharField(
        max_length=50, default=generate_case_number, unique=True
    )
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    case_type = models.ManyToManyField(CaseType, related_name="case_type", blank=True)
    status = models.CharField(
        max_length=255, choices=CaseStatus.choices, default=CaseStatus.OPEN
    )
    description = models.TextField()
    assigned_lawyer = models.ForeignKey(
        User,
        related_name="assigned_lawyer",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    assigned_users = models.ManyToManyField(
        User, related_name="assigned_to", blank=True
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._original_state = self._get_current_state()

    def _get_current_state(self):
        state = {}
        for field in self._meta.fields:
            try:
                state[field.name] = getattr(self, field.name)
            except Exception:
                state[field.name] = None
        return state

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.case_number)

        is_new = self._state.adding
        super().save(*args, **kwargs)

        if is_new:
            CaseActivity.objects.create(
                case=self, activity=f"Case {self.case_number} created."
            )
        else:
            changed_fields = []
            for field, original_value in self._original_state.items():
                current_value = getattr(self, field)
                if original_value != current_value:
                    changed_fields.append(
                        f"{field}: {original_value} -> {current_value}"
                    )
            if changed_fields:
                activity_message = f"Case {self.case_number} updated. " + " ".join(
                    changed_fields
                )
                CaseActivity.objects.create(case=self, activity=activity_message)
        self._original_state = self._get_current_state()

    def __str__(self):
        return self.case_number

    class Meta:
        ordering = ["-created"]


class CaseActivity(models.Model):
    case = models.ForeignKey(Case, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    activity = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Activity on {self.case} at {self.timestamp}"


class CaseRuling(SlugMixin, TimestampMixin, models.Model):
    case = models.ForeignKey(Case, on_delete=models.CASCADE, related_name="rulings")
    ruling_text = models.TextField()
    ruled_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    ruling_date = models.DateTimeField()

    def __str__(self):
        return (
            f"Ruling for {self.case.title} on {self.ruling_date.strftime('%Y-%m-%d')}"
        )


class Document(SlugMixin, TimestampMixin, models.Model):
    title = models.CharField(max_length=200)
    case = models.ForeignKey(Case, on_delete=models.CASCADE, related_name="documents")
    document_type = models.CharField(
        max_length=2, choices=DocumentType.choices, default=DocumentType.OTHER
    )
    file = models.FileField(upload_to="case_documents/")
    description = models.TextField()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("cases:document-detail", kwargs={"slug": self.slug})
