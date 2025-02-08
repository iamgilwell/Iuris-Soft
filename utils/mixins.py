import uuid
from django.db import models


class AddressAndPhoneNumberMixin(models.Model):
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address_one = models.TextField(blank=True, null=True)
    address_two = models.TextField(blank=True, null=True)

    class Meta:
        abstract = True


class TimestampMixin(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class SlugMixin(models.Model):
    slug = models.SlugField(unique=True, blank=True, editable=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = uuid.uuid4().hex[:10]
        super().save(*args, **kwargs)

    class Meta:
        abstract = True
