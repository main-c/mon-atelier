from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin, DestroyModelMixin,
	ListModelMixin, UpdateModelMixin, RetrieveModelMixin)
from core.serializers import (LocationImageSerializer, LogoutSerializer, OrderItemSerializer, OrderSerializer, ArticleSerializer,ModeleSerializer,
	MesureSerializer,ClientSerializer, LoginSerializer, UserSerializer,
	WorkerSerializer, CategorySerializer, WorkshopSerializer,)
from core.models import (LocationImage, Modele, Order, Article, Client, OrderItem, Worker, Category, Mesure, Workshop)
from rest_framework.decorators import action
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.http import JsonResponse, request
from django.contrib.auth.models import User
from drf_yasg.utils import swagger_auto_schema
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, status
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate, login, logout


class CategoryViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter,filters.OrderingFilter ]
    filterset_fields = ['name',]
    search_fields = ['^name']
    ordering_fields = ['name',]

class LocationViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

    serializer_class = LocationImageSerializer
    queryset = LocationImage.objects.all()
    filter_backends = [DjangoFilterBackend,]
    filterset_fields = ['workshop__name',]



class ModeleViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

    serializer_class = ModeleSerializer
    queryset = Modele.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter,filters.OrderingFilter,]
    filterset_fields = ['category__name','name','add_on']
    search_fields = ['^name','category__name']
    ordering_fields = ['category__name',]

   

class OrderViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter,filters.OrderingFilter ]
    filterset_fields = ['workshop__name', 'total_cost', 'delivery_date', 'state']
    search_fields = ['^client__name', '^workshop__name']
    ordering_fields = ['total_cost', 'delivery_date', 'state']


class ArticleViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter,filters.OrderingFilter ]
    filterset_fields = ['workshop__name', 'mesure', 'modele__name', 'modele__category__name']
    search_fields = ['^name']
    ordering_fields = ['name', 'cost', 'status']



class MesureViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

	serializer_class = MesureSerializer
	queryset = Mesure.objects.all()


class ClientViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

    serializer_class = ClientSerializer
    queryset = Client.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter,filters.OrderingFilter ]
    filterset_fields = ['order__workshop__name', 'tranche_d_age', 'sexe']
    search_fields = ['^name']
    ordering_fields = ['name', 'tranche_d_age', 'sexe']


class WorkerViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

    serializer_class = WorkerSerializer
    queryset = Worker.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter,filters.OrderingFilter ]
    filterset_fields = ['full_name','workshop__name']
    search_fields = ['$full_name', '$location']
    ordering_fields = ['full_name', 'since']

    
class OrderItemViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

    serializer_class = OrderItemSerializer
    queryset = OrderItem.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter,filters.OrderingFilter ]
    filterset_fields = ['mesure', 'modele__name', 'order']
    search_fields = ['$name',]
    ordering_fields = ['name', 'cost']



class WorkshopViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

    serializer_class = WorkshopSerializer
    queryset = Workshop.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter,filters.OrderingFilter ]
    filterset_fields = ['name', 'manager__last_name']
    search_fields = ['^name', '$location ']
    ordering_fields = ['name', 'cost', 'status']


class AuthViewSet(GenericViewSet):

    @swagger_auto_schema(
        request_body=LoginSerializer(),
        operation_description="Il faut passer le username et le password")
        
    @action(methods=['POST'], detail=True)
    def signin(self, request, *args, **kwargs):
        
        seria = LoginSerializer(data=self.request.data)
        seria.is_valid(raise_exception=True)

        username = seria.validated_data.get('username')
        password = seria.validated_data.get('password')

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request,user)
        else:
            raise AuthenticationFailed('Username or Password is not valid !')


        token = Token.objects.get_or_create(user=user)[0]
        return JsonResponse(UserSerializer(user).data)

class LogoutViewSet(GenericViewSet):

	serializer_class = LogoutSerializer


	@action(methods=["GET"], detail=False)
	def signout(self, request, *args, **kwargs):

		request.user.auth_token.delete()
		logout(request)
		return Response(status=status.HTTP_200_OK)



