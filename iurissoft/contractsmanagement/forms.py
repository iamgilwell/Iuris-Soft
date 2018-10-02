from django import forms
from .models import ContractManagement
from ckeditor.widgets import CKEditorWidget

class ContractCreationForm(forms.Model):
     class Meta:
        model = ContractManagement
        field=['contract_name','bindto','status']
        body = forms.CharField(widget=CKEditorWidget())