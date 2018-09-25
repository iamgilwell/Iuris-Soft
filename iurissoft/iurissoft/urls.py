"""iurissoft URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('iuris_admin.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
<<<<<<< .merge_file_hFHSTm
<<<<<<< .merge_file_yu8Qnl
<<<<<<< .merge_file_dlQqsx
<<<<<<< .merge_file_VY03lu
    #url(r'control/',include('control_panel.urls')),
    url(r'contacts/',include('contactsmanagement.urls')),
=======
    path('ckeditor',include('ckeditor_uploader.urls')),
>>>>>>> .merge_file_ToBSbu
=======
    path('ckeditor',include('ckeditor_uploader.urls')),
>>>>>>> .merge_file_LlVzTv
=======
    path('ckeditor',include('ckeditor_uploader.urls')),
>>>>>>> .merge_file_ErDSSj
=======
    path('ckeditor',include('ckeditor_uploader.urls')),
>>>>>>> .merge_file_ImQ2Ql
]
