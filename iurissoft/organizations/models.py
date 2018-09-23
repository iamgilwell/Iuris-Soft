from django.contrib.auth.models import User
from django.db import models

# Create your models here.
from geopy import location


class Organizations(models.Model):
    PUBLISHED = 'Published'
    DRAFT = 'Draft'

    ORGANIZATION_STATUS = (
        (PUBLISHED, 'Published'),
        (DRAFT, 'Draft'),
        # (DELETE, 'Delete'),
    )
    organization_name=models.CharField(max_length=250)
    website=models.CharField(max_length=250)
    location=models.CharField(max_length=250)
    primary_email=models.CharField(max_length=250)
    contact_person=models.CharField(max_length=250)
    assign_to=models.ForeignKey(User, default=None, blank=True, on_delete=models.DO_NOTHING)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField("Status", max_length=250, choices=ORGANIZATION_STATUS)

    def __str__(self):
        return self.organization_name