from rest_framework.routers import DefaultRouter


router = DefaultRouter()
#router.register('categories', CategoryViewSet, basename='categories')


urlpatterns = []

urlpatterns += router.urls
