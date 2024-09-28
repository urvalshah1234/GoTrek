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

from django.contrib.auth import authenticate

# User Login View
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        
        user = authenticate(username=username, password=password)
        
        if user is not None:
            print(request.data)
            return Response({
                "message": "Login successful",
                "success": True,
                "email": user.email  # Include the user's email in the response
            }, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Invalid username or password"}, status=status.HTTP_400_BAD_REQUEST)
    
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
    email = request.query_params.get('email')  # Get the email from query parameters
    if email:
        bookings = Booking.objects.filter(email=email).values('id', 'state', 'email', 'trek', 'price', 'trek_date', 'payment_method')
    else:
        bookings = Booking.objects.none()  # Return empty if no email is provided
    
    return Response(bookings, status=status.HTTP_200_OK)

# Delete Booking View
@api_view(['DELETE'])
def delete_booking(request, pk):
    try:
        booking = Booking.objects.get(pk=pk)
        booking.delete()
        return Response({"message": "Booking deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
    except Booking.DoesNotExist:
        return Response({"error": "Booking not found"}, status=status.HTTP_404_NOT_FOUND)


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

from rest_framework.response import Response
import requests
from django.conf import settings

@api_view(['GET'])  # Allow both GET and PUT requests
def fetch_news(request):
    if request.method == 'GET':
        url = f"http://api.mediastack.com/v1/news?access_key={settings.MEDIASTACK_API_KEY}&languages=en&keywords=travel&countries=IN"
        response = requests.get(url)
        data = response.json()
        return Response(data)

@api_view(['GET'])
def fetch_weather(request):
    city = request.GET.get('city')
    if city:
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={settings.OPENWEATHER_API_KEY}&units=metric"
        response = requests.get(url)
        data = response.json()
        return Response(data)
    else:
        return Response({"error": "City parameter is required."}, status=400)
    
from .models import Review
from .serializers import ReviewSerializer

@api_view(['GET', 'POST'])
def review_list_create(request):
    # Handle GET request: list all reviews
    if request.method == 'GET':
        reviews = Review.objects.all().order_by('-created_at')  # Order by latest
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    # Handle POST request: create a new review
    elif request.method == 'POST':
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

import razorpay

# Initialize Razorpay client
client = razorpay.Client(auth=("rzp_test_FQzlH7whPNyTpw", "f29JKfYy9ByV8IPB3RhdbnxN"))

@api_view(['POST'])
def create_order(request):
    booking_id = request.data.get('bookingId')

    # Fetch the booking details (price, etc.) from the database based on booking_id
    booking = Booking.objects.get(id=booking_id)  # Assuming Booking is your model name
    amount = int(booking.price) * 100  # Amount in paise (for example: ₹500 is 50000 paise)
    currency = 'INR'

    try:
        # Create an order
        order = client.order.create({'amount': amount, 'currency': currency, 'receipt': str(booking_id)})
        return Response({'orderId': order['id'], 'amount': amount}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def user_details(request):
    # Assuming you are fetching user details based on some parameter, for example, user ID
    user_id = request.query_params.get('user_id')  # Get user ID from query params

    try:
        user = CustomUser.objects.get(id=user_id)  # Get user from the database
        return Response({
            'full_name': user.full_name,
            'email': user.email,
            'phone_number': user.phone_number,
        }, status=status.HTTP_200_OK)
    except CustomUser.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def get_packing_list(request):
    difficulty = request.data.get('difficulty')
    weather = request.data.get('weather')
    duration = request.data.get('duration')

    packing_list = []

    # Base Packing List (common items)
    packing_list.extend(["Backpack", "Water Bottle", "First Aid Kit", "Flashlight", "Map and Compass", "Sunscreen"])

    # Packing list based on difficulty
    if difficulty == "easy":
        packing_list.extend(["Snacks (Energy Bars, Dried Fruit)", "Trekking Shoes", "Hat or Cap"])
    elif difficulty == "moderate":
        packing_list.extend(["Trekking Shoes", "Hiking Poles", "Multi-tool or Knife", "Insect Repellent"])
    elif difficulty == "hard":
        packing_list.extend(["Rain Jacket", "Emergency Blanket", "Trekking Shoes", "Multi-tool or Knife", "Survival Gear"])

    # Packing list based on weather
    if weather == "sunny":
        packing_list.extend(["Sunglasses", "Hat or Cap", "Light Clothing", "Sunscreen"])
    elif weather == "rainy":
        packing_list.extend(["Rain Jacket", "Waterproof Bag", "Extra Dry Clothes"])
    elif weather == "snowy":
        packing_list.extend(["Thermal Clothing", "Gloves", "Insulated Jacket", "Snow Boots", "Hand Warmers"])

    # Packing list based on duration
    if duration == "short":
        packing_list.extend(["Snacks", "Personal Identification"])
    elif duration == "medium":
        packing_list.extend(["Food Supplies", "Portable Charger", "Extra Water"])
    elif duration == "long":
        packing_list.extend(["Extra Clothing", "Tent", "Sleeping Bag", "Cooking Supplies", "Power Bank"])

    # Remove duplicate items
    packing_list = list(set(packing_list))

    return Response({'packing_list': packing_list})
