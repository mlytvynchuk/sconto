from django.db import models
from rest_framework import serializers, status
from rest_framework.response import Response
from discounts.models import *
from django.http import HttpResponse

class DiscountSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(many=False)
    time = serializers.StringRelatedField(many=False)
    height = serializers.StringRelatedField(many=False)
    overlay = serializers.StringRelatedField(many=False)
    
    class Meta:
        model = Discount
        fields = '__all__'

class DiscountCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = '__all__'
        
class LikeCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'
        
    def create(self,validated_data):
        like = Like.objects.filter(**validated_data)
        if not like:
            return Like.objects.create(**validated_data, owner=self.context['request'].user)
        return Response(status=status.HTTP_302_FOUND)
    
class LikeSerializer(serializers.ModelSerializer):
    discount = DiscountSerializer()
    class Meta:
        model = Like
        fields = '__all__'

    