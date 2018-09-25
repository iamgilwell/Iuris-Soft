from django import  forms

from .models import ContactManagements


class ContactCreateForm(forms.ModelForm):
    class Meta:
        model=ContactManagements
        fields=['first_name','last_name','primary_email','mobile_number','orginization','assigned_to','contact_type','status',]