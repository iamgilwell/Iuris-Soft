from django.db import models

from accounts.models import Organization
from utils.mixins import TimestampMixin


class Contact(TimestampMixin, models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
