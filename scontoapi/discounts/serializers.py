from django.db import models
from rest_framework import serializers
from discounts.models import *

class DiscountSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(many=False)
    time = serializers.StringRelatedField(many=False)
    height = serializers.StringRelatedField(many=False)
    overlay = serializers.StringRelatedField(many=False)

    class Meta:
        model = Discount
        fields = '__all__'