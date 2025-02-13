from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User, Profile, Organization

from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Row, Column, Field, Submit, Button
from django.urls import reverse_lazy
from django import forms
from .models import User


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
            "password1",  # Add password1 field
            "password2",  # Add password2 field
        )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_method = "post"
        self.helper.form_class = "form-horizontal"
        self.helper.label_class = "col-md-4 col-form-label"
        self.helper.field_class = "col-md-8"
        self.helper.field_class = "form-control"  

        self.helper.layout = Layout(
            Row(
                Column("first_name", css_class="col-md-6"),
                Column("last_name", css_class="col-md-6"),
            ),
            Row(
                Column("email", css_class="col-md-6"),
                Column("username", css_class="col-md-6"),
            ),
            Row(
                Column("user_type", css_class="col-md-6"),
                Column("country", css_class="col-md-6"),
            ),
            Row(
                Column("hourly_rate", css_class="col-md-6"),
                Column("phone_number", css_class="col-md-6"),
            ),
            Row(
                Column(
                    Row(
                        Column(
                            "address", css_class="col-md-8"
                        ),
                    ),
                    css_class="col-12",
                ),
            ),
            Row(
                Column("password1", css_class="col-md-6"),  # Add password1 field
                Column("password2", css_class="col-md-6"),  # Add password2 field
            ),
            Row(
                Column(
                    Submit("submit", "Save", css_class="btn btn-success mx-2"),
                    Button(
                        "cancel",
                        "Cancel",
                        css_class="btn btn-secondary mx-2",
                        onclick="window.location.href='{}'".format(
                            reverse_lazy("accounts:users")
                        ),
                    ),
                    css_class="d-flex justify-content-center mt-3",
                ),
            ),
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
            "password",  # Add password field
        )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_method = "post"
        self.helper.layout = Layout(
            Row(
                Column("first_name", css_class="col-md-6"),
                Column("last_name", css_class="col-md-6"),
            ),
            Row(
                Column("email", css_class="col-md-6"),
                Column("username", css_class="col-md-6"),
            ),
            Row(
                Column("user_type", css_class="col-md-6"),
                Column("country", css_class="col-md-6"),
            ),
            Row(
                Column("hourly_rate", css_class="col-md-6"),
                Column("phone_number", css_class="col-md-6"),
            ),
            Row(
                Column(
                    Row(
                        Column(
                            "address", css_class="col-md-8 offset-md-4"
                        ),
                    ),
                    css_class="col-12",
                ),
            ),
            Row(
                Column("password", css_class="col-md-6"),  # Add password field
            ),
            Row(
                Column(
                    Submit("submit", "Save", css_class="btn btn-success mx-2"),
                    Button(
                        "cancel",
                        "Cancel",
                        css_class="btn btn-secondary mx-2",
                        onclick="window.location.href='{}'".format(
                            reverse_lazy("accounts:users")
                        ),
                    ),
                    css_class="d-flex justify-content-center mt-3",
                ),
            ),
        )
class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = "__all__"


class OrganizationForm(forms.ModelForm):
    class Meta:
        model = Organization
        fields = "__all__"
