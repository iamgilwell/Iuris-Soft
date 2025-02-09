from django.urls import path
from .views import (
    UserListView,
    UserCreateView,
    UserUpdateView,
    UserDeleteView,
    UserDetailView,
    ProfileUpdateView,
    OrganizationListView,
    OrganizationCreateView,
    OrganizationUpdateView,
    OrganizationDeleteView,
    OrganizationDetailView,
)

app_name = "accounts"

urlpatterns = [
    path("", UserListView.as_view(), name="users"),
    path("users/create/", UserCreateView.as_view(), name="user-create"),
    path("users/<int:pk>/update/", UserUpdateView.as_view(), name="user-update"),
    path("users/<int:pk>/delete/", UserDeleteView.as_view(), name="user-delete"),
    path("users/<int:pk>/", UserDetailView.as_view(), name="user-detail"),
    path(
        "profile/<int:pk>/update/", ProfileUpdateView.as_view(), name="profile-update"
    ),
    path("organizations/", OrganizationListView.as_view(), name="organization-list"),
    path(
        "organizations/create/",
        OrganizationCreateView.as_view(),
        name="organization-create",
    ),
    path(
        "organizations/<int:pk>/update/",
        OrganizationUpdateView.as_view(),
        name="organization-update",
    ),
    path(
        "organizations/<int:pk>/delete/",
        OrganizationDeleteView.as_view(),
        name="organization-delete",
    ),
    path(
        "organizations/<int:pk>/",
        OrganizationDetailView.as_view(),
        name="organization-detail",
    ),
]
