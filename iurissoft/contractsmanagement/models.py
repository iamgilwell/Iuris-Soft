from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.

class ContractManagement(models.Model):
    PUBLISHED = 'Published'
    DRAFT = 'Draft'
    # DELETE='Delete'
    CONTRACT_STATUS = (
        (PUBLISHED, 'Publish'),
        (DRAFT, 'Draft'),
        # (DELETE, 'Delete'),
    )
    TYPE_SELECT = (('Client', 'Client'), ('Employee', 'Employee'),)
    contract_name=models.CharField(max_length=250)
    bindto=models.CharField(max_length=30, choices=TYPE_SELECT, null=True)
  #  bindto=models.ChoiceField( widget=forms.RadioSelect,choices=CHOICES)
    body =  RichTextUploadingField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField("Status", max_length=250, choices=CONTRACT_STATUS)

    def __str__(self):
        return self.contract_name