# myclinic/views.py

from django.shortcuts import render, redirect
from .models import CustomerSupport, DeliveryDetail, Appointment, AmbulanceRequest
from .forms import CustomerSupportForm, DeliveryDetailForm, AppointmentForm, AmbulanceRequestForm

def customer_support(request):
    if request.method == 'POST':
        form = CustomerSupportForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('customer_support')
    else:
        form = CustomerSupportForm()
    return render(request, 'myclinic/customer_support.html', {'form': form})

def delivery_details(request):
    if request.method == 'POST':
        form = DeliveryDetailForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('delivery_details')
    else:
        form = DeliveryDetailForm()
    return render(request, 'myclinic/delivery_details.html', {'form': form})

def appointments(request):
    if request.method == 'POST':
        form = AppointmentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('appointments')
    else:
        form = AppointmentForm()
    return render(request, 'myclinic/appointments.html', {'form': form})

def ambulance_request(request):
    if request.method == 'POST':
        form = AmbulanceRequestForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('ambulance_request')
    else:
        form = AmbulanceRequestForm()
    return render(request, 'myclinic/ambulance_request.html', {'form': form})