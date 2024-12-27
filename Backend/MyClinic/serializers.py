# myclinic/serializers.py
from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import SignUp, Login, CustomerSupport, DeliveryDetail, Appointment, AmbulanceRequest

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ['email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            try:
                user = Login.objects.get(email=email)
            except Login.DoesNotExist:
                raise serializers.ValidationError("Invalid email or password")
            
            if not user.check_password(password):
                raise serializers.ValidationError("Invalid email or password")
        else:
            raise serializers.ValidationError("Must include both email and password")

        data['user'] = user
        return data

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
        fields = ['first_name', 'last_name', 'phone', 'address', 'appointment_date', 'appointment_time', 'department', 'doctor_name']
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