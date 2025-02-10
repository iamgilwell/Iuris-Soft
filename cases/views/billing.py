from django.views.generic import CreateView, ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from cases.models import CaseActivity
from cases.models.billing import ClientRetainer, Invoice, TimeEntry


class TimeEntryCreateView(LoginRequiredMixin, CreateView):
    model = TimeEntry
    fields = ["case", "start_time", "end_time", "description"]
    template_name = "billing/time_entry_form.html"
    success_url = "/billing/time-entries/"

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


class TimeEntryListView(LoginRequiredMixin, ListView):
    model = TimeEntry
    template_name = "billing/time_entry_list.html"
    context_object_name = "time_entries"


class InvoiceCreateView(LoginRequiredMixin, CreateView):
    model = Invoice
    fields = ["case", "client", "date_issued", "due_date", "amount"]
    template_name = "billing/invoice_form.html"
    success_url = "/billing/invoices/"

    def form_valid(self, form):
        response = super().form_valid(form)
        CaseActivity.objects.create(
            case=form.instance.case,
            user=self.request.user,
            activity=f"Invoice #{form.instance.invoice_number} created",
        )
        return response


class InvoiceListView(LoginRequiredMixin, ListView):
    model = Invoice
    template_name = "billing/invoice_list.html"
    context_object_name = "invoices"


class InvoiceDetailView(LoginRequiredMixin, DetailView):
    model = Invoice
    template_name = "billing/invoice_detail.html"
    context_object_name = "invoice"


class ClientRetainerCreateView(LoginRequiredMixin, CreateView):
    model = ClientRetainer
    fields = ["client", "amount", "start_date", "end_date"]
    template_name = "billing/client_retainer_form.html"
    success_url = "/billing/retainers/"


class ClientRetainerListView(LoginRequiredMixin, ListView):
    model = ClientRetainer
    template_name = "billing/client_retainer_list.html"
    context_object_name = "retainers"
