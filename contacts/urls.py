from django.urls import path
from .views import (
    ContactListView,
    ContactCreateView,
    ContactUpdateView,
    ContactDeleteView,
)

app_name = "contact"
urlpatterns = [
    path("", ContactListView.as_view(), name="list"),
    path("create/", ContactCreateView.as_view(), name="create"),
    path("<int:pk>/update/", ContactUpdateView.as_view(), name="update"),
    path("<int:pk>/delete/", ContactDeleteView.as_view(), name="delete"),
]
