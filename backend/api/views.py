from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse
from .serializers import CustomUserSerializer

from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print(request.data)
        return JsonResponse({"message": "User created successfully!", "success": True}, status=201)
    return JsonResponse(serializer.errors, status=400)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        # If authentication is successful, return a success response
        print(request.data)
        return Response({"message": "Login successful", "success": True}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .email_service import EmailVerification
from .models import OTP, CustomUser

@api_view(['POST'])
def send_otp(request):
    email = request.data.get('email')
    if email:
        # Check if the email is registered
        if not CustomUser.objects.filter(email=email).exists():
            return Response({"message": "Email is not registered"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Proceed to send OTP
        EmailVerification.send_verification_code(email)
        return Response({"message": "OTP sent successfully!"}, status=status.HTTP_200_OK)
    return Response({"message": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def verify_otp(request):
    email = request.data.get('email')
    otp_code = request.data.get('otp')

    try:
        otp = OTP.objects.get(email=email)
        if otp.otp_code == otp_code and otp.is_valid():
            # Verify the user if OTP is correct
            return Response({"message": "OTP verified successfully!"}, status=status.HTTP_200_OK)
        return Response({"message": "Invalid or expired OTP"}, status=status.HTTP_400_BAD_REQUEST)
    except OTP.DoesNotExist:
        return Response({"message": "OTP does not exist"}, status=status.HTTP_400_BAD_REQUEST)
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from .models import Profile
# from .serializers import ProfileSerializer

# @api_view(['GET', 'POST'])
# def profile_view(request):
#     if request.method == 'GET':
#         try:
#             profile = request.profile
#             serializer = ProfileSerializer(profile)
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         except Profile.DoesNotExist:
#             return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)

#     elif request.method == 'POST':
#         serializer = ProfileSerializer(data=request.data)
#         if serializer.is_valid():
#             profile, created = Profile.objects.update_or_create(
#                 defaults=serializer.validated_data
#             )
#             return Response(
#                 {"success": True, "message": "Profile updated successfully"}, 
#                 status=status.HTTP_200_OK if not created else status.HTTP_201_CREATED
#             )
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Profile
from .serializers import ProfileSerializer

@api_view(['GET', 'POST'])
def profile_view(request):
    if request.method == 'GET':
        email = request.query_params.get('email')
        if email:
            try:
                profile = Profile.objects.get(email=email)
                serializer = ProfileSerializer(profile)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Profile.DoesNotExist:
                return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response({"error": "Email parameter not provided"}, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'POST':
        email = request.data.get('email')
        if email:
            profile, created = Profile.objects.update_or_create(
                email=email,
                defaults={
                    'first_name': request.data.get('first_name'),
                    'last_name': request.data.get('last_name'),
                    'birthday': request.data.get('birthday'),
                    'gender': request.data.get('gender'),
                    'height': request.data.get('height'),
                    'weight': request.data.get('weight'),
                    'contact_number': request.data.get('contact_number'),
                    'blood_group': request.data.get('blood_group'),
                    'address': request.data.get('address')
                }
            )
            return Response(
                {"success": True, "message": "Profile updated successfully"}, 
                status=status.HTTP_200_OK if not created else status.HTTP_201_CREATED
            )
        return Response({"error": "Email parameter not provided"}, status=status.HTTP_400_BAD_REQUEST)

# views.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Booking
from .serializers import BookingSerializer

@api_view(['POST'])
def create_booking(request):
    serializer = BookingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_bookings(request):
    bookings = Booking.objects.all().values('state', 'trek', 'price', 'trek_date', 'payment_method')
    return Response(bookings, status=status.HTTP_200_OK)

