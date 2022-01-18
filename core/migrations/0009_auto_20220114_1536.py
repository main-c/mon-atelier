# Generated by Django 3.2.9 on 2022-01-14 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_auto_20220112_1014'),
    ]

    operations = [
        migrations.AlterField(
            model_name='locationimage',
            name='location_image_1',
            field=models.ImageField(blank=True, null=True, upload_to='images/locations'),
        ),
        migrations.AlterField(
            model_name='locationimage',
            name='location_image_2',
            field=models.ImageField(blank=True, null=True, upload_to='images/locations'),
        ),
        migrations.AlterField(
            model_name='workshop',
            name='logo',
            field=models.ImageField(blank=True, null=True, upload_to='images/logos'),
        ),
    ]
