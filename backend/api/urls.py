from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),

    path('verify_otp/',views.verify_otp,name='verify_otp'),
    path('send_otp/',views.send_otp,name='send_otp'),

    path('profile_view/', views.profile_view, name='profile_view'),
    path('bookings/', views.create_booking, name='create_booking'),
    path('yourbookings/', views.list_bookings, name='list_bookings'),
    path('profile_create/', views.create_profile, name='create_profile'),
    path('profile_update/<int:pk>/', views.update_profile, name='update_profile'),


]
