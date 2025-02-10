from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User, Profile, Organization


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = (
            "email",
            "username",
            "first_name",
            "last_name",
            "user_type",
            "country",
            "hourly_rate",
            "phone_number",
            "address",
        )


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = (
            "email",
            "username",
            "first_name",
            "last_name",
            "user_type",
            "country",
            "hourly_rate",
            "phone_number",
            "address",
        )


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = "__all__"


class OrganizationForm(forms.ModelForm):
    class Meta:
        model = Organization
        fields = "__all__"
