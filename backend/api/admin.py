from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser

class CustomUserAdmin(BaseUserAdmin):
    model = CustomUser
    list_display = ('username', 'email', 'full_name', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')
    
    # Specify fields for detailed user view
    fieldsets = (
        (None, {'fields': ('username', 'email', 'full_name', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    
    # Specify fields for adding a new user
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'full_name', 'password1', 'password2', 'is_staff', 'is_active'),
        }),
    )
    
    search_fields = ('username', 'email', 'full_name')
    ordering = ('username',)
    
    # Remove 'filter_horizontal' as it references fields not present in CustomUser
    filter_horizontal = ()

admin.site.register(CustomUser, CustomUserAdmin)
