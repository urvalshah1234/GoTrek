# Import necessary modules and classes
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .serializers import CustomUserSerializer, LoginSerializer, ProfileSerializer, BookingSerializer
from .models import OTP, CustomUser, Profile, Booking
from .email_service import EmailVerification

# User Signup View
@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print(request.data)
        return JsonResponse({"message": "User created successfully!", "success": True}, status=201)
    return JsonResponse(serializer.errors, status=400)

# User Login View
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        print(request.data)
        return Response({"message": "Login successful", "success": True}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Send OTP View
@api_view(['POST'])
def send_otp(request):
    email = request.data.get('email')
    if email:
        if not CustomUser.objects.filter(email=email).exists():
            return Response({"message": "Email is not registered"}, status=status.HTTP_400_BAD_REQUEST)
        EmailVerification.send_verification_code(email)
        return Response({"message": "OTP sent successfully!"}, status=status.HTTP_200_OK)
    return Response({"message": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)

# Verify OTP View
@api_view(['POST'])
def verify_otp(request):
    email = request.data.get('email')
    otp_code = request.data.get('otp')

    try:
        otp = OTP.objects.get(email=email)
        if otp.otp_code == otp_code and otp.is_valid():
            return Response({"message": "OTP verified successfully!"}, status=status.HTTP_200_OK)
        return Response({"message": "Invalid or expired OTP"}, status=status.HTTP_400_BAD_REQUEST)
    except OTP.DoesNotExist:
        return Response({"message": "OTP does not exist"}, status=status.HTTP_400_BAD_REQUEST)

# Profile View (GET & POST)
@api_view(['GET', 'POST'])
def profile_view(request):
    if request.method == 'GET':
        email = request.query_params.get('email')
        if email:
            if not CustomUser.objects.filter(email=email).exists():
                return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)
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
            if not CustomUser.objects.filter(email=email).exists():
                return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)
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

# Booking View with email check
@api_view(['POST'])
def create_booking(request):
    email = request.data.get('email')
    if email:
        if not CustomUser.objects.filter(email=email).exists():
            return Response({"error": "User with this email does not exist"}, status=status.HTTP_404_NOT_FOUND)
        
        # If the email exists, proceed with the booking creation
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({"error": "Email parameter not provided"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_bookings(request):
    bookings = Booking.objects.all().values('state', 'trek', 'price', 'trek_date', 'payment_method')
    return Response(bookings, status=status.HTTP_200_OK)

# Create Profile View
@api_view(['POST'])
def create_profile(request):
    serializer = ProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': True, 'data': serializer.data}, status=status.HTTP_201_CREATED)
    return Response({'success': False, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

# Update Profile View
@api_view(['PUT'])
def update_profile(request, pk):
    try:
        profile = Profile.objects.get(pk=pk)
    except Profile.DoesNotExist:
        return Response({'success': False, 'message': 'Profile not found'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = ProfileSerializer(profile, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': True, 'data': serializer.data})
    return Response({'success': False, 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
