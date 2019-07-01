from rest_framework import routers
from .views import DiscountsViewSet, LikesViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'discounts', DiscountsViewSet, basename='discounts')
router.register(r'likes', LikesViewSet, basename='likes')


urlpatterns = router.urls
