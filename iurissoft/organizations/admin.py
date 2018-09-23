from django.contrib import admin
from .models import Organizations

# Register your models here.

class OrganizationsAdmin(admin.ModelAdmin):
    list_display = ('organization_name','website','location','primary_email','contact_person',)

admin.site.register(Organizations,OrganizationsAdmin)