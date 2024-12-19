# myclinic/tests.py

from django.test import TestCase
from django.urls import reverse
from .models import CustomerSupport, DeliveryDetail, Appointment, AmbulanceRequest

class MyClinicTests(TestCase):

    def test_customer_support_view(self):
        response = self.client.get(reverse('customer_support'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Customer Support')

    def test_delivery_details_view(self):
        response = self.client.get(reverse('delivery_details'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Delivery Details')

    def test_appointments_view(self):
        response = self.client.get(reverse('appointments'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Appointments')

    def test_ambulance_request_view(self):
        response = self.client.get(reverse('ambulance_request'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Ambulance Request')