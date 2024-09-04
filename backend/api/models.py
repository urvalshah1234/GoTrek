from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, full_name, password=None, phone_number=None):
        if not username:
            raise ValueError('The Username field must be set')
        if not email:
            raise ValueError('The Email field must be set')
        user = self.model(username=username, email=email, full_name=full_name, phone_number=phone_number)
        user.set_password(password)  # Use set_password to hash the password
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, full_name, password=None):
        user = self.create_user(username, email, full_name, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser):
    full_name = models.CharField(max_length=255)
    username = models.CharField(max_length=150, unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'full_name']

    def __str__(self):
        return self.username
    
# models.py

from django.db import models
# models.py

from django.utils import timezone
import random

class OTP(models.Model):
    email = models.EmailField(unique=True)
    otp_code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_valid(self):
        # OTP is valid for 5 minutes
        return (timezone.now() - self.created_at).total_seconds() < 300

    @staticmethod
    def generate_otp(email):
        otp_code = ''.join([str(random.randint(0, 9)) for _ in range(6)])
        otp, created = OTP.objects.update_or_create(
            email=email,
            defaults={'otp_code': otp_code}
        )
        return otp_code

from django.db import models

class Profile(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    birthday = models.DateField()
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')])
    height = models.DecimalField(max_digits=5, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    contact_number = models.CharField(max_length=20)
    email = models.EmailField()
    blood_group = models.CharField(max_length=5)
    address = models.TextField()

    def __str__(self):
        return f"{self.first_name}'s Profile"


