# myclinic/views.py

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import SignUp, Login, CustomerSupport, DeliveryDetail, Appointment, AmbulanceRequest, DoctorAppointment
from .serializers import SignUpSerializer, LoginSerializer, CustomerSupportSerializer, DeliveryDetailSerializer, AppointmentSerializer, AmbulanceRequestSerializer, DoctorAppointmentSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def authenticate_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return JsonResponse({'status': 'error', 'message': 'Email and password are required'}, status=400)

        try:
            user = SignUp.objects.get(email=email)
            if user.check_password(password):
                return JsonResponse({'status': 'success', 'message': 'Login successful'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Invalid password'}, status=400)
        except SignUp.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'User does not exist'}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)

class LoginViewSet(viewsets.ModelViewSet):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer

    @action(detail=False, methods=['post'])
    def authenticate(self, request):
        data = request.data
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return Response({'status': 'error', 'message': 'Email and password are required'}, status=400)
        try:
            user = SignUp.objects.get(email=email)
            if user.check_password(password):
                return Response({'status': 'success', 'message': 'Authenticated successfully'})
            else:
                return Response({'status': 'error', 'message': 'Invalid password'}, status=400)
        except SignUp.DoesNotExist:
            return Response({'status': 'error', 'message': 'User not found'}, status=404)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=500)

class CustomerSupportViewSet(viewsets.ModelViewSet):
    queryset = CustomerSupport.objects.all()
    serializer_class = CustomerSupportSerializer

class DeliveryDetailViewSet(viewsets.ModelViewSet):
    queryset = DeliveryDetail.objects.all()
    serializer_class = DeliveryDetailSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    @action(detail=False, methods=['post'])
    def create_appointment(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'success', 'message': 'Appointment created successfully'})
        return Response({'status': 'error', 'message': serializer.errors}, status=400)

class AmbulanceRequestViewSet(viewsets.ModelViewSet):
    queryset = AmbulanceRequest.objects.all()
    serializer_class = AmbulanceRequestSerializer

class SignUpViewSet(viewsets.ModelViewSet):
    queryset = SignUp.objects.all()
    serializer_class = SignUpSerializer

class DoctorAppointmentViewSet(viewsets.ModelViewSet):
    queryset = DoctorAppointment.objects.all()
    serializer_class = DoctorAppointmentSerializer

    def retrieve(self, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def list_appointments(self):
        appointments = Appointment.objects.all()
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data)