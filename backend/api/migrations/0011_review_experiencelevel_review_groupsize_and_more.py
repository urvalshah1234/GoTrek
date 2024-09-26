# Generated by Django 5.1 on 2024-09-26 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='experienceLevel',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='review',
            name='groupSize',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='review',
            name='trekDifficulty',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='review',
            name='trekDuration',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='review',
            name='trekType',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='review',
            name='trekWeather',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='review',
            name='wouldRecommend',
            field=models.BooleanField(default=False),
        ),
    ]
