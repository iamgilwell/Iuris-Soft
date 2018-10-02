from django.contrib.auth.models import User
from django.db import models
from organizations.models import Organizations
from django_countries.fields import CountryField

# Create your models here.
class ContactType(models.Model):
    name=models.CharField(max_length=250)

    def __str__(self):
        return self.name


class ContactManagements(models.Model):
    PUBLISHED = 'Published'
    DRAFT = 'Draft'

    CONTACT_STATUS = (
        (PUBLISHED, 'Published'),
        (DRAFT, 'Draft'),
        # (DELETE, 'Delete'),
    )

    first_name=models.CharField(max_length=250)
    last_name=models.CharField(max_length=250)

    primary_email=models.CharField(max_length=250)
    mobile_number=models.CharField(max_length=250)

    address = models.CharField(max_length=250,default=None, null=True)
    street = models.CharField(max_length=250,default=None, null=True)

    city = models.CharField(max_length=250,default=None, null=True)
    state = models.CharField(max_length=250,default=None, null=True)
    postcode = models.CharField(max_length=250,default=None, null=True)

    country = CountryField(default=None, null=True)

    #orginization=models.CharField(max_length=250)
    orginization = models.ForeignKey(Organizations,default=None, blank=True, on_delete=models.DO_NOTHING)
    assigned_to=models.ForeignKey(User, default=None, blank=True, on_delete=models.DO_NOTHING)

    contact_type=models.ManyToManyField(ContactType)

    note =  models.TextField(max_length=1024*2,default=None, null=True)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
   # added_by = models.ForeignKey(User,null=True, default=None, blank=True, on_delete=models.DO_NOTHING)
    status = models.CharField("Status", max_length=250, choices=CONTACT_STATUS)

    def __str__(self):
        return self.first_name


