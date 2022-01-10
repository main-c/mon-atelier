from django.contrib.auth.models import User
from django.db import models


class Workshop(models.Model):
    name = models.CharField(max_length=255,unique=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=13, unique=True, null=False, blank=True)
    whatsapp_phone = models.CharField(max_length=13, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    logo = models.ImageField(blank=True, null=True, upload_to="images/logos/", default='images/logo.png')
    manager = models.OneToOneField(User, models.CASCADE)

    def __str__(self):
        return self.name


class LocationImage(models.Model):
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    location_image_1 = models.ImageField(blank=True, null=True, upload_to="images/locations/")
    location_image_2 = models.ImageField(blank=True, null=True, upload_to="images/locations/")

    def __str__(self):
        return f'images of {self.workshop.name}'


class Worker(models.Model):
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255, unique=True, null=False, blank=True)
    phone = models.CharField(max_length=13, unique = True, null=False, blank=True)
    salary = models.CharField(max_length=255, null=False, blank=True, default='NA')
    no_cni = models.CharField(max_length=255, unique = True,  null=False, blank=True)
    # L'age n'est pas necessaire
    location = models.CharField(max_length=255, null=True, blank=True)
    cv = models.FileField(upload_to='worker_cv',  null=True, blank=True)
    since = models.DateField(auto_now=True)

    def __str__(self):
        return self.full_name


class Mesure(models.Model):
    largeur_epaule = models.FloatField(blank=True,null=True)
    epaule_coude = models.FloatField(blank=True,null=True)
    epaule_poignet = models.FloatField(blank=True,null=True)
    nuque_poitrine = models.FloatField(blank=True,null=True)
    nuque_bas_blouse = models.FloatField(blank=True,null=True)
    tour_biceps = models.FloatField(blank=True,null=True)
    tour_poignet = models.FloatField(blank=True,null=True)
    tour_cou = models.FloatField(blank=True,null=True)
    dessus_proitrine = models.FloatField(blank=True,null=True)
    poitrine = models.FloatField(blank=True,null=True)
    taile = models.FloatField(blank=True,null=True)
    hanche_3 = models.FloatField(blank=True,null=True)
    hanche_7 = models.FloatField(blank=True,null=True)
    hanche_9 = models.FloatField(blank=True,null=True)
    longueur_devant = models.FloatField(blank=True,null=True)
    longueur_dos = models.FloatField(blank=True,null=True)
    carrure_devant = models.FloatField(blank=True,null=True)
    carrure_dos = models.FloatField(blank=True,null=True)
    epaule_a_l_autre = models.FloatField(blank=True,null=True)
    tour_fourche = models.FloatField(blank=True,null=True)
    hauteur_fourche = models.FloatField(blank=True,null=True)
    tour_cuisse = models.FloatField(blank=True,null=True)
    laterale_jambe = models.FloatField(blank=True,null=True)
    

class Client(models.Model):
    SEXE = [('M','Masculin'), ('F','Feminin')]
    TRANCHE = [('En','Enfant'), ('Ado','Adolescent'), ('Adulte','Adulte')]

    name = models.CharField(max_length=255, unique=True, null=False, blank=True)
    phone = models.CharField(max_length=13, null=False, blank=True)
    tranche_d_age = models.CharField(max_length=6, choices=TRANCHE)
    sexe = models.CharField(max_length=255, null=False, choices=SEXE)
    mesure = models.OneToOneField(Mesure,  on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    STATE = [ ('C', 'En Conception'),('T', 'Termine'), ('M', 'Attente de materiel'),]
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    delivery_date = models.DateField(auto_now_add=False, auto_now=False, blank=True)
    comment = models.TextField(null=True, blank=True)
    total_cost = models.IntegerField(default = 0, null=False, blank=True)
    state = models.CharField(max_length=100, choices=STATE)

    def __str__(self):
        return str(self.delivery_date)

    def get_total_cost(self):
        items = OrderItem.objects.filter(order=self.id)
        if items:
            for item in items:
                self.total_cost += item.get_total_cost()
        else:
            self.total_cost = 0    
        return self.total_cost


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True, null=False, blank=True)

    def __str__(self):
        return self.name


class Modele(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=True, blank=True)
    add_on = models.DateTimeField(auto_now=True)
    image = models.ImageField(blank=True, null=False, upload_to="images/modeles")

    def __str__(self):
        return self.name



class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    modele = models.ForeignKey(Modele, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=False, blank=True)
    cost = models.IntegerField(null=False, blank=True)
    echantillon = models.ImageField(upload_to='images/echantillons')
    result = models.ImageField(upload_to='images/articles')
    quantity = models.IntegerField(null=False, blank=True)
    mesure = models.OneToOneField(Mesure,  on_delete=models.SET_NULL, null=True, blank=True)
     
    def __str__(self):
        return self.name

    def get_total_cot(self):
        return self.cost * self.qty



class Article(OrderItem, models.Model):
    status = models.CharField(max_length=255, null=False, choices=[("En vente", "En vente"), ("Vendu", "Vendu")], default="En vente")
    description = models.TextField(null=True, blank=True)
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name + " | " + self.status