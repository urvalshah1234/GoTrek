from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),

    path('verify_otp/',views.verify_otp,name='verify_otp'),
    path('send_otp/',views.send_otp,name='send_otp'),

    path('profile_view/', views.profile_view, name='profile_view'),
]
