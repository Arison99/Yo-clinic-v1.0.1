# myclinic/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('customer-support/', views.customer_support, name='customer_support'),
    path('delivery-details/', views.delivery_details, name='delivery_details'),
    path('appointments/', views.appointments, name='appointments'),
    path('ambulance-request/', views.ambulance_request, name='ambulance_request'),
]