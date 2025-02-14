from django.contrib import messages
from django.urls import reverse_lazy
from django.views.generic import (
    ListView,
    CreateView,
    UpdateView,
    DeleteView,
    DetailView,
)
from .models import Client, User, Profile, Organization
from .forms import (
    CustomUserCreationForm,
    CustomUserChangeForm,
    ProfileForm,
    OrganizationForm,
)


class UserListView(ListView):
    model = User
    template_name = "accounts/user_list.html"
    context_object_name = "users"


class UserCreateView(CreateView):
    model = User
    form_class = CustomUserCreationForm
    template_name = "accounts/user_form.html"
    success_url = reverse_lazy("accounts:users")

    def form_valid(self, form):
        user = form.save()
        messages.success(self.request, f"{user.username} successfully added.")
        return super().form_valid(form)


class UserUpdateView(UpdateView):
    model = User
    form_class = CustomUserChangeForm
    template_name = "accounts/user_form.html"
    success_url = reverse_lazy("accounts:users")

    def form_valid(self, form):
        user = form.save()
        messages.success(self.request, f"{user.username.title()} successfully updated.")
        return super().form_valid(form)


class UserDeleteView(DeleteView):
    model = User
    template_name = "accounts/user_confirm_delete.html"
    success_url = reverse_lazy("accounts:users")

    def form_valid(self, form):
        messages.success(self.request, f"Successfully deleted.")
        return super().form_valid(form)


class UserDetailView(DetailView):
    model = User
    template_name = "accounts/user_detail.html"


class ProfileUpdateView(UpdateView):
    model = Profile
    form_class = ProfileForm
    template_name = "accounts/profile_form.html"
    success_url = reverse_lazy("accounts:users")


class OrganizationListView(ListView):
    model = Organization
    template_name = "accounts/organization_list.html"
    context_object_name = "organizations"


class OrganizationCreateView(CreateView):
    model = Organization
    form_class = OrganizationForm
    template_name = "accounts/organization_form.html"
    success_url = reverse_lazy("organization-list")


class OrganizationUpdateView(UpdateView):
    model = Organization
    form_class = OrganizationForm
    template_name = "accounts/organization_form.html"
    success_url = reverse_lazy("organization-list")


class OrganizationDeleteView(DeleteView):
    model = Organization
    template_name = "accounts/organization_confirm_delete.html"
    success_url = reverse_lazy("organization-list")


class OrganizationDetailView(DetailView):
    model = Organization
    template_name = "accounts/organization_detail.html"


class ClientCreateView(CreateView):
    model = Client
    fields = ["user", "organization"]
    template_name = "users/client_form.html"
    success_url = "/clients/"


# class ClientListView(LoginRequiredMixin, ListView):
class ClientListView(ListView):

    model = Client
    template_name = "users/client_list.html"
    context_object_name = "clients"
