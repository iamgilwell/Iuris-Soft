from django.contrib.auth.models import User
from django.db import models
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField

from utils.enum import UserType
from utils.mixins import AddressAndPhoneNumberMixin, SlugMixin, TimestampMixin


class User(AbstractUser,  SlugMixin,TimestampMixin):
    email = models.EmailField(unique=True)
    organization = models.ForeignKey(
        "accounts.Organization", on_delete=models.CASCADE, null=True, blank=True
    )
    is_superadmin = models.BooleanField(default=False)
    user_type = models.CharField(
        max_length=20, choices=UserType.choices, default=UserType.NORMAL
    )
    country = CountryField(default=None, null=True)
    hourly_rate = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    phone_number = models.CharField(max_length=20, blank=True)
    address = models.CharField(max_length=50, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "first_name", "last_name"]


class Profile(AddressAndPhoneNumberMixin, SlugMixin, TimestampMixin, models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.get_full_name()


class Organization(AddressAndPhoneNumberMixin, SlugMixin, TimestampMixin, models.Model):
    name = models.CharField(max_length=100)
    superadmin = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="superadmin_of"
    )
    country = CountryField(default=None, null=True)
    created_by = models.ForeignKey(
        "accounts.User",
        on_delete=models.SET_NULL,
        null=True,
        related_name="org_created",
    )

    def __str__(self):
        return self.name


class Client(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    client_organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name="client_organization"
    )

    def __str__(self):
        return self.user.get_full_name() or self.user.username
