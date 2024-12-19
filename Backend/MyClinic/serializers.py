# myclinic/serializers.py
from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import SignUp, Login, CustomerSupport, DeliveryDetail, Appointment, AmbulanceRequest

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ['email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Login(
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class CustomerSupportSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerSupport
        fields = '__all__'

class DeliveryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryDetail
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

class AmbulanceRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = AmbulanceRequest
        fields = '__all__'

class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = SignUp
        fields = ['first_name', 'last_name', 'department', 'email', 'esn', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)