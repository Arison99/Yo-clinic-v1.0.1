# myclinic/forms.py

from django import forms
from .models import CustomerSupport, DeliveryDetail, Appointment, AmbulanceRequest

class CustomerSupportForm(forms.ModelForm):
    class Meta:
        model = CustomerSupport
        fields = ['name', 'email', 'message']

class DeliveryDetailForm(forms.ModelForm):
    class Meta:
        model = DeliveryDetail
        fields = ['name', 'address', 'phone', 'delivery_date', 'notes']

class AppointmentForm(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = ['first_name', 'last_name', 'phone', 'address', 'appointment_date', 'appointment_time', 'department', 'doctor_name']

class AmbulanceRequestForm(forms.ModelForm):
    class Meta:
        model = AmbulanceRequest
        fields = ['caretaker_name', 'patient_name', 'emergency', 'phone_number', 'address']