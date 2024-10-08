# Generated by Django 5.1 on 2024-09-20 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_booking_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('feedback_message', models.TextField()),
                ('booking_experience', models.TextField()),
                ('submitted_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
