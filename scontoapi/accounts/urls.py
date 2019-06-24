from rest_framework import routers
from django.urls import path, include
from .views import *
router = routers.DefaultRouter()
router.register(r'', UserViewSet, basename='user')
urlpatterns = [
    path('create/', UserCreate.as_view(), name='account-create'),
    # path('', UserViewSet.as_view(), name='users')
]
urlpatterns += router.urls
    


