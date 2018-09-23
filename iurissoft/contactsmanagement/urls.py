# coding=utf-8

from django.conf.urls import url
from .views import contact_list,create_contact

app_name='contactsmanagement'

urlpatterns=[
    url(r'^contact-list/$',contact_list,name='contact_list'),
    url(r'^create-contact/$',create_contact,name='create-contact'),

]