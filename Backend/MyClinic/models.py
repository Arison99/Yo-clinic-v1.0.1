# myclinic/models.py

from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class Login(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def authenticate(self, email, raw_password):
        try:
            user = Login.objects.get(email=email)
            if user.check_password(raw_password):
                return user
        except Login.DoesNotExist:
            return None

    def __str__(self):
        return self.email

class CustomerSupport(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name

class DeliveryDetail(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    phone = models.CharField(max_length=15)
    delivery_date = models.DateField()
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    address = models.TextField()
    appointment_date = models.DateField()
    appointment_time = models.TimeField()
    department = models.CharField(max_length=100)
    doctor_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class AmbulanceRequest(models.Model):
    caretaker_name = models.CharField(max_length=100)
    patient_name = models.CharField(max_length=100)
    emergency = models.TextField()
    phone_number = models.CharField(max_length=15)
    address = models.TextField()

    def __str__(self):
        return self.caretaker_name
    
class SignUp(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    esn = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"