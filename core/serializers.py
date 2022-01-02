from rest_framework.serializers import ModelSerializer

from core.models import Article, Category, Client, LocationImage, Modele, Order, OrderItem, Worker


class LocationImageSerializer(ModelSerializer):

    class Meta:
        model = LocationImage
        fields = ['id', 'workshop', 'location_image_1', 'location_image_1location_image_2']


class WorkerSerializer(ModelSerializer):

    class Meta:
        model = Worker
        fields = ['id', 'workshop', 'full_name', 'phone', 'salary', 'no_cni', 'location', 'cv', 'since']


class ClientSerializer(ModelSerializer):

    class Meta:
        model = Client
        fields = ['id', 'name', 'phone', 'tranche_d_age', 'sexe']


class OrderSerializer(ModelSerializer):

    class Meta:
        model = Order
        fields = ['id', 'workshop', 'client', 'delivery_date', 'comment', 'total_cost', 'state']


class CategorySerializer(ModelSerializer):

    class Meta:
        model = Category
        fields = ['id', 'name']


class ModeleSerializer(ModelSerializer):

    class Meta:
        model = Modele
        fields = ['id', 'category', 'name', 'add_on', 'image']


class OrderItemSerializer(ModelSerializer):

    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'modele', 'name', 'cost', 'echantillon', 'result', 'quantity']


class ArticleSerializer(ModelSerializer):

    class Meta:
        model = Article
        fields = ['id', 'status', 'description', 'order', 'modele', 'name', 'cost', 'echantillon', 'result', 'quantity']


