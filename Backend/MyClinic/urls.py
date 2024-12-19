# myclinic/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SignUpViewSet, LoginViewSet, CustomerSupportViewSet, DeliveryDetailViewSet, AppointmentViewSet, AmbulanceRequestViewSet

router = DefaultRouter()
router.register(r'login', LoginViewSet)
router.register(r'signup', SignUpViewSet, basename='signup')
router.register(r'customer-support', CustomerSupportViewSet)
router.register(r'delivery-details', DeliveryDetailViewSet)
router.register(r'appointments', AppointmentViewSet)
router.register(r'ambulance-requests', AmbulanceRequestViewSet)

urlpatterns = [
    path('', include(router.urls)),
]