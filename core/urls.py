from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", include("dashboard.urls")),
    # path("accounts/", include("accounts.urls")),
    path("contacts/", include("contacts.urls")),
    path("cases/", include("cases.urls")),
    path("admin/", admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0]
    )
