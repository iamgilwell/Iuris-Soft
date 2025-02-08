from django.db import models
from django.urls import reverse
from django_countries.fields import CountryField

from utils.enum import CaseStatus, DocumentType
from utils.mixins import AddressAndPhoneNumberMixin, SlugMixin, TimestampMixin


class Client(AddressAndPhoneNumberMixin, SlugMixin, TimestampMixin, models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    country = CountryField(default=None, null=True)
    email = models.EmailField()

    def __str__(self):
        return self.name


class Case(SlugMixin, TimestampMixin, models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    status = models.CharField(
        max_length=10, choices=CaseStatus.choices, default=CaseStatus.OPEN
    )
    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


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
