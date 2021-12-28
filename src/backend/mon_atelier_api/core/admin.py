from django.contrib import admin

from core.models import Article, Category, Client, LocationImage, Modele, Order, OrderItem, Worker, Workshop


admin.site.register(Workshop)
admin.site.register(Worker)
admin.site.register(LocationImage)
admin.site.register(Client)
admin.site.register(Order)
admin.site.register(Category)
admin.site.register(Modele)
admin.site.register(OrderItem)
admin.site.register(Article)