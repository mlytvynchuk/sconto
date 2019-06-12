from django.shortcuts import render
from rest_framework import viewsets, routers
from discounts.models import Discount
from .serializers import DiscountSerializer
# Create your views here.
class DiscountsViewSet(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountSerializer



