from django.contrib import admin

# Register your models here.

from django.contrib import admin

# Register your models here.
from .models import ContractManagement

class ContractManagementAdmin(admin.ModelAdmin):
    list_display = ('contract_name','bindto','body','status',)

admin.site.register(ContractManagement)
