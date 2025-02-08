from django.db import models

from accounts.models import Organization
from utils.mixins import AddressAndPhoneNumberMixin, TimestampMixin


class Contact(AddressAndPhoneNumberMixin, TimestampMixin, models.Model):
    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name="contacts", null=True
    )
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
