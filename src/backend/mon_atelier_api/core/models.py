from django.db import models


class Workshop(models.Model):
    name = models.CharField(max_length=255, null=False, blank=True)
    location = models.CharField(max_length=255, null=False, blank=True)
    phone = models.CharField(max_length=13, null=False, blank=True)
    whatsapp_phone = models.CharField(max_length=13, null=False, blank=True)
    description = models.TextField()
    logo = models.ImageField(blank=True, null=False, upload_to="images/logos/")

    def __str__(self):
        return self.name



class LocationImage(models.Model):
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    location_image_1 = models.ImageField(blank=True, null=True, upload_to="images/locations/")
    location_image_2 = models.ImageField(blank=True, null=True, upload_to="images/locations/")

    def __str__(self):
        return self.workshop.name



class Worker(models.Model):
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, null=False, blank=True)
    last_name = models.CharField(max_length=255, null=False, blank=True)
    phone = models.CharField(max_length=13, null=False, blank=True)
    salary = models.IntegerField(null=False, blank=True)
    no_cni = models.CharField(max_length=255, null=False, blank=True)
    # L'age n'est pas necessaire
    location = models.CharField(max_length=255, null=False, blank=True)
    # Connait pas comment upload un fichier pdf 

    def __str__(self):
        return self.first_name



class Client(models.Model):
    name = models.CharField(max_length=255, null=False, blank=True)
    phone = models.CharField(max_length=13, null=False, blank=True)
    # L'age n'est pas necessaire ici, mais dans le commentaire de la commande si
    # La localisation n'est pas necessaire aussi, a moins que ce soit avec livraison
    location = models.CharField(max_length=255, null=False, blank=True)
    sexe = models.CharField(max_length=255, null=False, choices=[("Masculin", "Masculin"), ("Feminin", "Feminin")], default="Masculin")

    def __str__(self):
        return self.name



class Order(models.Model):
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    delivery_date = models.DateField(auto_now_add=False, auto_now=False, blank=True)
    comment = models.TextField()
    total_cost = models.IntegerField(null=False, blank=True)
    state = models.BooleanField(default=False)

    def __str__(self):
        return str(self.delivery_date)

    def get_total_cost(self):
        return self.total_cost



class Category(models.Model):
    name = models.CharField(max_length=255, null=False, blank=True)

    def __str__(self):
        return self.name



class Modele(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=False, blank=True)
    # Connait pas le type de <add_on>
    image = models.ImageField(blank=True, null=False, upload_to="images/modeles/")

    def __str__(self):
        return self.name



class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    modele = models.ForeignKey(Modele, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=False, blank=True)
    cost = models.IntegerField(null=False, blank=True)
    # Connait pas la nature de echantillon
    quantity = models.IntegerField(null=False, blank=True)

    def __str__(self):
        return self.name



class Article(OrderItem):
    status = models.CharField(max_length=255, null=False, choices=[("En vente", "En vente"), ("Vendu", "Vendu")], default="En vente")

    def __str__(self):
        return self.name + " | " + self.status