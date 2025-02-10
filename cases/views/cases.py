from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView,
)
from django.urls import reverse_lazy

from accounts.models import Client
from cases.models.cases import Case, Document


# Client views
class ClientListView(ListView):
    model = Client
    template_name = "cases/client_list.html"
    context_object_name = "clients"


class ClientDetailView(DetailView):
    model = Client
    template_name = "cases/client_detail.html"


class ClientCreateView(CreateView):
    model = Client
    template_name = "cases/client_form.html"
    fields = ["name", "email", "phone"]


class ClientUpdateView(UpdateView):
    model = Client
    template_name = "cases/client_form.html"
    fields = ["name", "email", "phone"]


class ClientDeleteView(DeleteView):
    model = Client
    template_name = "cases/client_confirm_delete.html"
    success_url = reverse_lazy("client-list")


# Case views
class CaseListView(ListView):
    model = Case
    template_name = "cases/case_list.html"
    context_object_name = "cases"


class CaseDetailView(DetailView):
    model = Case
    template_name = "cases/case_detail.html"
    context_object_name = "case"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["activities"] = self.object.caseactivity_set.all().order_by(
            "-timestamp"
        )
        return context


class CaseCreateView(CreateView):
    model = Case
    template_name = "cases/case_form.html"
    fields = ["title", "description", "client", "status"]


class CaseUpdateView(UpdateView):
    model = Case
    template_name = "cases/case_form.html"
    fields = ["title", "description", "client", "status"]


class CaseDeleteView(DeleteView):
    model = Case
    template_name = "cases/case_confirm_delete.html"
    success_url = reverse_lazy("case-list")


# Document views
class DocumentListView(ListView):
    model = Document
    template_name = "cases/document_list.html"
    context_object_name = "documents"


class DocumentDetailView(DetailView):
    model = Document
    template_name = "cases/document_detail.html"


class DocumentCreateView(CreateView):
    model = Document
    template_name = "cases/document_form.html"
    fields = ["title", "case", "document_type", "file"]


class DocumentUpdateView(UpdateView):
    model = Document
    template_name = "cases/document_form.html"
    fields = ["title", "case", "document_type", "file"]


class DocumentDeleteView(DeleteView):
    model = Document
    template_name = "cases/document_confirm_delete.html"
    success_url = reverse_lazy("document-list")
