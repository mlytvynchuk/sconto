from rest_framework import routers
from .views import DiscountsViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'discounts', DiscountsViewSet)


urlpatterns = router.urls
