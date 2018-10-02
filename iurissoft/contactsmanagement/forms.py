from django import  forms
from django.db import models
from django_countries.fields import CountryField


from .models import ContactManagements


class ContactCreateForm(forms.ModelForm):
    class Meta:
        model=ContactManagements
        fields=['first_name','last_name','primary_email','mobile_number','orginization','assigned_to','contact_type','status',]