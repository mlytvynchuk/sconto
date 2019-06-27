from django.shortcuts import render
from rest_framework import viewsets, routers
from rest_framework.response import Response
from discounts.models import Discount, Like
from .serializers import DiscountSerializer, LikeSerializer, LikeCreateSerializer
# Create your views here.
class DiscountsViewSet(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountSerializer



class LikesViewSet(viewsets.ModelViewSet):
    serializer_class = LikeCreateSerializer
    queryset = Like.objects.all()
    def list(self, request):
        queryset = Like.objects.all()
        serializer = LikeSerializer(queryset, many=True)
        return Response(serializer.data)
    def retrieve(self,request, pk=None):
        queryset = Like.objects.all()
        if pk:
            queryset = queryset.filter(owner=pk)
            serializer = LikeSerializer(queryset, many=True)
            return Response(serializer.data)
        serializer = LikeSerializer(queryset, many=True)
        return Response(serializer.data)
                
    # def create(self, request):
    #     serializer = LikeSerializer(data=request.data)
    #     if serializer.is_valid():
    #         like = serializer.save(owner=request.user)
    #         if like:
    #             json = serializer.data
    #             return Response(json, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
