from django.urls import path

from accounts.views import ClientCreateView, ClientListView

from cases.views.billing import (
    ClientRetainerCreateView,
    ClientRetainerListView,
    InvoiceCreateView,
    InvoiceDetailView,
    InvoiceListView,
    TimeEntryCreateView,
    TimeEntryListView,
)
from cases.views.cases import (
    CaseCreateView,
    CaseDeleteView,
    CaseDetailView,
    CaseListView,
    CaseUpdateView,
    ClientDeleteView,
    ClientDetailView,
    ClientUpdateView,
    DocumentCreateView,
    DocumentDeleteView,
    DocumentDetailView,
    DocumentListView,
    DocumentUpdateView,
)

app_name = "cases"
urlpatterns = [
    # Client URLs
    path("clients/", ClientListView.as_view(), name="client-list"),
    path("clients/<int:pk>/", ClientDetailView.as_view(), name="client-detail"),
    path("clients/create/", ClientCreateView.as_view(), name="client-create"),
    path(
        "clients/<int:pk>/update/",
        ClientUpdateView.as_view(),
        name="client-update",
    ),
    path(
        "clients/<int:pk>/delete/",
        ClientDeleteView.as_view(),
        name="client-delete",
    ),
    # Case URLs
    path("cases/", CaseListView.as_view(), name="case-list"),
    path("cases/<int:pk>/", CaseDetailView.as_view(), name="case-detail"),
    path("cases/create/", CaseCreateView.as_view(), name="case-create"),
    path("cases/<int:pk>/update/", CaseUpdateView.as_view(), name="case-update"),
    path("cases/<int:pk>/delete/", CaseDeleteView.as_view(), name="case-delete"),
    # Document URLs
    path("documents/", DocumentListView.as_view(), name="document-list"),
    path(
        "documents/<int:pk>/",
        DocumentDetailView.as_view(),
        name="document-detail",
    ),
    path("documents/create/", DocumentCreateView.as_view(), name="document-create"),
    path(
        "documents/<int:pk>/update/",
        DocumentUpdateView.as_view(),
        name="document-update",
    ),
    path(
        "documents/<int:pk>/delete/",
        DocumentDeleteView.as_view(),
        name="document-delete",
    ),
    path("time-entries/", TimeEntryListView.as_view(), name="time_entry_list"),
    path(
        "time-entries/create/", TimeEntryCreateView.as_view(), name="time_entry_create"
    ),
    path("invoices/", InvoiceListView.as_view(), name="invoice_list"),
    path("invoices/create/", InvoiceCreateView.as_view(), name="invoice_create"),
    path("invoices/<int:pk>/", InvoiceDetailView.as_view(), name="invoice_detail"),
    path("retainers/", ClientRetainerListView.as_view(), name="client_retainer_list"),
    path(
        "retainers/create/",
        ClientRetainerCreateView.as_view(),
        name="client_retainer_create",
    ),
]
