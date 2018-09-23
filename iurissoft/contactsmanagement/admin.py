from django.contrib import admin
from .models import ContactType,ContactManagements

# Register your models here.

class ContactsManagementAdmin(admin.ModelAdmin):

    list_display = ('first_name','last_name','primary_email','mobile_number','orginization','status',)

admin.site.register(ContactManagements,ContactsManagementAdmin)

admin.site.register(ContactType)

#admin.site.register(ContactManagements)
