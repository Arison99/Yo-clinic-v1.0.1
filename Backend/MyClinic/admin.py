from django.contrib import admin
from .models import CustomerSupport, DeliveryDetail, Appointment, AmbulanceRequest

class CustomerSupportAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message')
    search_fields = ('name', 'email')

class DeliveryDetailAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'phone', 'delivery_date', 'notes')
    search_fields = ('name', 'address', 'phone')
    list_filter = ('delivery_date',)

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'phone', 'appointment_date', 'appointment_time', 'department', 'doctor_name')
    search_fields = ('first_name', 'last_name', 'phone', 'department', 'doctor_name')
    list_filter = ('appointment_date', 'department')

class AmbulanceRequestAdmin(admin.ModelAdmin):
    list_display = ('caretaker_name', 'patient_name', 'emergency', 'phone_number', 'address')
    search_fields = ('caretaker_name', 'patient_name', 'phone_number')
    list_filter = ('emergency',)

admin.site.register(CustomerSupport, CustomerSupportAdmin)
admin.site.register(DeliveryDetail, DeliveryDetailAdmin)
admin.site.register(Appointment, AppointmentAdmin)
admin.site.register(AmbulanceRequest, AmbulanceRequestAdmin)