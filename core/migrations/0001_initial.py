# Generated by Django 3.2.9 on 2021-12-28 22:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255)),
                ('phone', models.CharField(blank=True, max_length=13)),
                ('location', models.CharField(blank=True, max_length=255)),
                ('sexe', models.CharField(choices=[('Masculin', 'Masculin'), ('Feminin', 'Feminin')], default='Masculin', max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Modele',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255)),
                ('image', models.ImageField(blank=True, upload_to='images/modeles/')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.category')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('delivery_date', models.DateField(blank=True)),
                ('comment', models.TextField()),
                ('total_cost', models.IntegerField(blank=True)),
                ('state', models.BooleanField(default=False)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.client')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255)),
                ('cost', models.IntegerField(blank=True)),
                ('quantity', models.IntegerField(blank=True)),
                ('modele', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.modele')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.order')),
            ],
        ),
        migrations.CreateModel(
            name='Workshop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255)),
                ('location', models.CharField(blank=True, max_length=255)),
                ('phone', models.CharField(blank=True, max_length=13)),
                ('whatsapp_phone', models.CharField(blank=True, max_length=13)),
                ('description', models.TextField()),
                ('logo', models.ImageField(blank=True, upload_to='images/logos/')),
            ],
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('orderitem_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='core.orderitem')),
                ('status', models.CharField(choices=[('En vente', 'En vente'), ('Vendu', 'Vendu')], default='En vente', max_length=255)),
            ],
            bases=('core.orderitem',),
        ),
        migrations.CreateModel(
            name='Worker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=255)),
                ('last_name', models.CharField(blank=True, max_length=255)),
                ('phone', models.CharField(blank=True, max_length=13)),
                ('salary', models.IntegerField(blank=True)),
                ('no_cni', models.CharField(blank=True, max_length=255)),
                ('location', models.CharField(blank=True, max_length=255)),
                ('workshop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.workshop')),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='workshop',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.workshop'),
        ),
        migrations.CreateModel(
            name='LocationImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location_image_1', models.ImageField(blank=True, null=True, upload_to='images/locations/')),
                ('location_image_2', models.ImageField(blank=True, null=True, upload_to='images/locations/')),
                ('workshop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.workshop')),
            ],
        ),
    ]
