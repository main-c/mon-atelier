from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, Serializer
from core.models import (Article, Category, Client, LocationImage, 
                            Modele, Order, OrderItem, Worker,
                            Mesure, Workshop
)

class LocationImageSerializer(ModelSerializer):

    class Meta:
        model = LocationImage
        fields = ['id', 'workshop', 'location_image_1', 'location_image_2']


class WorkerSerializer(ModelSerializer):

    class Meta:
        model = Worker
        fields = ['id', 'workshop', 'full_name', 'phone', 'salary', 'no_cni', 'location', 'cv', 'since']


class ClientSerializer(ModelSerializer):

    class Meta:
        model = Client
        fields = ['id', 'name', 'phone', 'tranche_d_age', 'sexe', 'mesure']


class MesureSerializer(ModelSerializer):

    class Meta:
        model = Mesure
        fields = '__all__'


class OrderSerializer(ModelSerializer):

    class Meta:
        model = Order
        fields = ['id', 'workshop', 'client', 'delivery_date', 'comment', 'state',]

    
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
        fields = ['id', 'order', 'modele', 'name', 'cost', 'echantillon', 'result', 'quantity', 'mesure']


class ArticleSerializer(ModelSerializer):

    class Meta:
        model = Article
        fields = ['id', 'status', 'description', 'modele', 'workshop', 'name', 'cost', 'echantillon', 'result', 'quantity', 'mesure']


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ("last_name",  "password", "email")


class WorkshopSerializer(ModelSerializer):

    manager = ProfileSerializer()

    class Meta:
        model = Workshop
        fields = ("id", "manager", "name", "location", "phone", "whatsapp_phone", "description", "logo")

    def create(self, validated_data):
        profile_data = validated_data.pop("manager")
        # create user profile
        user = User.objects.create_user(
            last_name=profile_data["last_name"],
            username=profile_data["email"],
            email=profile_data["email"],
            password=profile_data["password"],
        )
        # create a workswhop instance using the user profile already created
        couturier = Workshop.objects.create(
            manager=user,
            name = validated_data.get('name'),
            location = validated_data.get('location'),
            phone = validated_data.get('phone'),
            whatsapp_phone = validated_data.get('whatsapp_phone'),
            description = validated_data.get('description'),
            logo = validated_data.get('logo'),
        )
        return couturier

    def update(self, instance, validated_data):
        profile_data = validated_data.pop("manager")
        user = User.objects.get(username=profile_data['email'])
        user.last_name=profile_data["last_name"]
        user.username = profile_data['email']
        user.email=profile_data["email"]
        user.set_password(profile_data['password'])
        user.save()

        instance.manager = user
        instance.name = validated_data.get('name', instance.name)
        instance.location = validated_data.get('location', instance.location)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.whatsapp_phone = validated_data.get('whatsapp_phone', instance.whatsapp_phone)
        instance.description = validated_data.get('description', instance.description)
        instance.logo = validated_data.get('logo', instance.logo)
        instance.save

        print(instance.logo)
        return instance
        


    
class LoginSerializer(Serializer):

    username = serializers.CharField()
    password = serializers.CharField()


class UserSerializer(ModelSerializer):

    token = serializers.SerializerMethodField()

    def get_token(self, instance:User):
        return Token.objects.get(user=instance).key

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'token')
