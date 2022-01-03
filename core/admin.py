from django.contrib import admin

from core.models import Article, Category, Client, LocationImage, Modele, Order, OrderItem, Worker, Workshop

class WorkshopAdmin(admin.ModelAdmin):
    list_display = ('name', 'manager', 'location')
    list_filter = ('location',)
    search_fields = ('name',)


class WorkerAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'workshop', 'location')
    list_filter = ('location',)
    search_fields = ('full_name',)


class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'sexe', 'tranche_d_age')
    list_filter = ('sexe', 'tranche_d_age')
    search_fields = ('name',)


class OrderAdmin(admin.ModelAdmin):
    list_display = ('client', 'delivery_date', 'state')
    list_filter = ('state', 'workshop__name')


class ModeleAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'add_on')
    list_filter = ('category',)


class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'order', 'modele', 'quantity')
    list_filter = ('modele__category',)
    search_fields = ('name',)


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('name', 'status')
    list_filter = ('status', 'modele__category')
    search_fields = ('name',)


admin.site.register(Workshop, WorkshopAdmin)
admin.site.register(Worker, WorkerAdmin)
admin.site.register(LocationImage)
admin.site.register(Client, ClientAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Category)
admin.site.register(Modele, ModeleAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(Article, ArticleAdmin)