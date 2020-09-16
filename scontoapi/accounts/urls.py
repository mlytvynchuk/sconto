from rest_framework import routers
from django.urls import path, include
from .views import *


router = routers.DefaultRouter()
router.register(r'profile', ProfileView, basename='profile')
router.register(r'', UserViewSet, basename='user')

urlpatterns = [
    path('profile/',
         ProfileView.as_view({'get': 'get'}), name='account-profile'),
]
urlpatterns += router.urls
