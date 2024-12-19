# myclinic/tests.py

from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import CustomerSupport, DeliveryDetail, Appointment, AmbulanceRequest

class CustomerSupportModelTests(TestCase):

    def test_create_customer_support(self):
        customer_support = CustomerSupport.objects.create(
            name="John Doe",
            email="john.doe@example.com",
            message="This is a test message."
        )
        self.assertEqual(customer_support.name, "John Doe")
        self.assertEqual(customer_support.email, "john.doe@example.com")
        self.assertEqual(customer_support.message, "This is a test message.")

class DeliveryDetailModelTests(TestCase):

    def test_create_delivery_detail(self):
        delivery_detail = DeliveryDetail.objects.create(
            name="Jane Doe",
            address="123 Main St",
            phone="1234567890",
            delivery_date="2023-01-01",
            notes="Leave at the front door."
        )
        self.assertEqual(delivery_detail.name, "Jane Doe")
        self.assertEqual(delivery_detail.address, "123 Main St")
        self.assertEqual(delivery_detail.phone, "1234567890")
        self.assertEqual(delivery_detail.delivery_date, "2023-01-01")
        self.assertEqual(delivery_detail.notes, "Leave at the front door.")

class AppointmentModelTests(TestCase):

    def test_create_appointment(self):
        appointment = Appointment.objects.create(
            first_name="Alice",
            last_name="Smith",
            phone="0987654321",
            address="456 Elm St",
            appointment_date="2023-02-01",
            appointment_time="10:00:00",
            department="Cardiology",
            doctor_name="Dr. Brown"
        )
        self.assertEqual(appointment.first_name, "Alice")
        self.assertEqual(appointment.last_name, "Smith")
        self.assertEqual(appointment.phone, "0987654321")
        self.assertEqual(appointment.address, "456 Elm St")
        self.assertEqual(appointment.appointment_date, "2023-02-01")
        self.assertEqual(appointment.appointment_time, "10:00:00")
        self.assertEqual(appointment.department, "Cardiology")
        self.assertEqual(appointment.doctor_name, "Dr. Brown")

class AmbulanceRequestModelTests(TestCase):

    def test_create_ambulance_request(self):
        ambulance_request = AmbulanceRequest.objects.create(
            caretaker_name="Bob Johnson",
            patient_name="Charlie Johnson",
            emergency="Severe chest pain",
            phone_number="1122334455",
            address="789 Oak St"
        )
        self.assertEqual(ambulance_request.caretaker_name, "Bob Johnson")
        self.assertEqual(ambulance_request.patient_name, "Charlie Johnson")
        self.assertEqual(ambulance_request.emergency, "Severe chest pain")
        self.assertEqual(ambulance_request.phone_number, "1122334455")
        self.assertEqual(ambulance_request.address, "789 Oak St")

class MyClinicViewTests(TestCase):

    def setUp(self):
        self.client = APIClient()

    def test_customer_support_view(self):
        url = reverse('customer_support-list')
        data = {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "message": "This is a test message."
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(CustomerSupport.objects.count(), 1)
        self.assertEqual(CustomerSupport.objects.get().name, "John Doe")

    def test_delivery_details_view(self):
        url = reverse('deliverydetail-list')
        data = {
            "name": "Jane Doe",
            "address": "123 Main St",
            "phone": "1234567890",
            "delivery_date": "2023-01-01",
            "notes": "Leave at the front door."
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(DeliveryDetail.objects.count(), 1)
        self.assertEqual(DeliveryDetail.objects.get().name, "Jane Doe")

    def test_appointment_view(self):
        url = reverse('appointment-list')
        data = {
            "first_name": "Alice",
            "last_name": "Smith",
            "phone": "0987654321",
            "address": "456 Elm St",
            "appointment_date": "2023-02-01",
            "appointment_time": "10:00:00",
            "department": "Cardiology",
            "doctor_name": "Dr. Brown"
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Appointment.objects.count(), 1)
        self.assertEqual(Appointment.objects.get().first_name, "Alice")

    def test_ambulance_request_view(self):
        url = reverse('ambulancerequest-list')
        data = {
            "caretaker_name": "Bob Johnson",
            "patient_name": "Charlie Johnson",
            "emergency": "Severe chest pain",
            "phone_number": "1122334455",
            "address": "789 Oak St"
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(AmbulanceRequest.objects.count(), 1)
        self.assertEqual(AmbulanceRequest.objects.get().caretaker_name, "Bob Johnson")

