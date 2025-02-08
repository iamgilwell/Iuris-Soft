from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Contact


class ContactListView(ListView):
    model = Contact
    template_name = "contacts/contact_list.html"
    context_object_name = "contacts"


class ContactCreateView(CreateView):
    model = Contact
    fields = ["name", "email", "phone", "organization"]
    template_name = "contacts/contact_form.html"
    success_url = reverse_lazy("contact-list")


class ContactUpdateView(UpdateView):
    model = Contact
    fields = ["name", "email", "phone", "organization"]
    template_name = "contacts/contact_form.html"
    success_url = reverse_lazy("contact-list")


class ContactDeleteView(DeleteView):
    model = Contact
    template_name = "contacts/contact_confirm_delete.html"
    success_url = reverse_lazy("contact-list")
