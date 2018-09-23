# coding=utf-8

from django.conf.urls import url
from .views import contact_list

app_name='contactsmanagement'

urlpatterns=[
    url(r'^contact-list/$',contact_list,name='contact_list'),

]