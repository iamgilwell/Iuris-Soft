from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Profile, Organization


class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name_plural = "Profile"


class CustomUserAdmin(UserAdmin):
    inlines = (ProfileInline,)


# Register the custom User model
admin.site.register(User, CustomUserAdmin)
admin.site.register(Organization)

# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin
# from django.contrib.auth.models import User
# from .models import Profile, Organization


# class ProfileInline(admin.StackedInline):
#     model = Profile
#     can_delete = False
#     verbose_name_plural = "Profile"


# class CustomUserAdmin(UserAdmin):
#     inlines = (ProfileInline,)


# admin.site.unregister(User)
# admin.site.register(User, CustomUserAdmin)
# admin.site.register(Organization)
