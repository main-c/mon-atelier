# Generated by Django 4.0 on 2021-12-30 05:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_mesure_rename_first_name_worker_full_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
