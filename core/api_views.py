from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin, DestroyModelMixin,
	ListModelMixin, UpdateModelMixin, RetrieveModelMixin)
from core.serializers import (OrderItemSerializer, OrderSerializer, ArticleSerializer,ModeleSerializer,
	MesureSerializer,ClientSerializer, LoginSerializer, UserSerializer,
	WorkerSerializer, CategorySerializer, WorkshopSerializer,)
from core.models import (Modele, Order, Article, Client, OrderItem, Worker, Category, Mesure, Workshop)
from rest_framework.decorators import action
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.http import JsonResponse, request
from django.contrib.auth.models import User
from drf_yasg.utils import swagger_auto_schema


class CategoryViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

	serializer_class = CategorySerializer
	queryset = Category.objects.all()


class ModeleViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

	serializer_class = ModeleSerializer
	queryset = Modele.objects.all()


class OrderViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

	serializer_class = OrderSerializer
	queryset = Order.objects.all()


class ArticleViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

	serializer_class = ArticleSerializer
	queryset = Article.objects.all()


class MesureViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

	serializer_class = MesureSerializer
	queryset = Mesure.objects.all()


class ClientViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

	serializer_class = ClientSerializer
	queryset = Client.objects.all()

class WorkerViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

	serializer_class = WorkerSerializer
	queryset = Worker.objects.all()


class OrderItemViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

	serializer_class = OrderItemSerializer
	queryset = OrderItem.objects.all()


class WorkshopViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
	UpdateModelMixin, DestroyModelMixin, GenericViewSet):

	serializer_class = WorkshopSerializer
	queryset = Workshop.objects.all()

class AuthViewSet(GenericViewSet):

	@swagger_auto_schema(
		request_body=LoginSerializer(),
		operation_description="Il faut passer le username et le password et le password doit avoir 6 characteres")
	@action(methods=['POST'], detail=True)
	
	def signin(self, request, *args, **kwargs):
		
		seria = LoginSerializer(data=self.request.data)
		seria.is_valid(raise_exception=True)

		username = seria.validated_data.get('username')
		password = seria.validated_data.get('password')

		user = User.objects.filter(username=username).first()
		if not user:
			raise ValueError("Username/password not found")

		if not user.check_password(password):
			raise ValueError("Username/password not found")

		token = Token.objects.get_or_create(user=user)[0]
		print(f"token {token.key}")
		return JsonResponse(UserSerializer(user).data)


