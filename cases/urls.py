from django.urls import path
from . import views

app_name = "cases"
urlpatterns = [
    # Client URLs
    path("clients/", views.ClientListView.as_view(), name="client-list"),
    path("clients/<int:pk>/", views.ClientDetailView.as_view(), name="client-detail"),
    path("clients/create/", views.ClientCreateView.as_view(), name="client-create"),
    path(
        "clients/<int:pk>/update/",
        views.ClientUpdateView.as_view(),
        name="client-update",
    ),
    path(
        "clients/<int:pk>/delete/",
        views.ClientDeleteView.as_view(),
        name="client-delete",
    ),
    # Case URLs
    path("cases/", views.CaseListView.as_view(), name="case-list"),
    path("cases/<int:pk>/", views.CaseDetailView.as_view(), name="case-detail"),
    path("cases/create/", views.CaseCreateView.as_view(), name="case-create"),
    path("cases/<int:pk>/update/", views.CaseUpdateView.as_view(), name="case-update"),
    path("cases/<int:pk>/delete/", views.CaseDeleteView.as_view(), name="case-delete"),
    # Document URLs
    path("documents/", views.DocumentListView.as_view(), name="document-list"),
    path(
        "documents/<int:pk>/",
        views.DocumentDetailView.as_view(),
        name="document-detail",
    ),
    path(
        "documents/create/", views.DocumentCreateView.as_view(), name="document-create"
    ),
    path(
        "documents/<int:pk>/update/",
        views.DocumentUpdateView.as_view(),
        name="document-update",
    ),
    path(
        "documents/<int:pk>/delete/",
        views.DocumentDeleteView.as_view(),
        name="document-delete",
    ),
]
