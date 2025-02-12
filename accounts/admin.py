from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import User, Profile, Organization, Client


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = (
        "email",
        "username",
        "first_name",
        "last_name",
        "is_staff",
        "is_superadmin",
        "user_type",
        "organization",
    )
    list_filter = ("is_staff", "is_superuser", "is_active", "user_type", "organization")
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (_("Personal info"), {"fields": ("first_name", "last_name", "username")}),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "is_superadmin",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
        (
            _("Additional info"),
            {
                "fields": (
                    "organization",
                    "user_type",
                    "country",
                    "hourly_rate",
                    "phone_number",
                    "address",
                )
            },
        ),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "username", "password1", "password2"),
            },
        ),
    )
    search_fields = ("email", "username", "first_name", "last_name")
    ordering = ("email",)
    filter_horizontal = (
        "groups",
        "user_permissions",
    )


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "slug", "created", "updated")
    search_fields = (
        "user__email",
        "user__username",
        "user__first_name",
        "user__last_name",
    )
    readonly_fields = ("slug", "created", "updated")


@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "superadmin",
        "country",
        "created_by",
        "created",
        "updated",
    )
    search_fields = ("name", "superadmin__email", "superadmin__username")
    readonly_fields = ("slug", "created", "updated")


# @admin.register(Client)
# class ClientAdmin(admin.ModelAdmin):
#     list_display = ("user", "client_organization")
#     search_fields = (
#         "user__email",
#         "user__username",
#         "user__first_name",
#         "user__last_name",
#         "client_organization__name",
#     )
