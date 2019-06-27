from django.shortcuts import render
from rest_framework import viewsets, routers, permissions
from rest_framework.response import Response
from discounts.models import Discount, Like
from .serializers import DiscountSerializer, LikeSerializer, LikeCreateSerializer, DiscountCreateSerializer
from rest_framework.authentication import TokenAuthentication
class DiscountsViewSet(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountCreateSerializer
    def list(self,request):
        serializer = DiscountSerializer(self.queryset, many=True)
        return Response(serializer.data)


class LikesViewSet(viewsets.ModelViewSet):
    serializer_class = LikeCreateSerializer
    queryset = Like.objects.all()
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly)
    def list(self, request):
        return Response(data=None)
    #     queryset = Like.objects.all()
    #     serializer = LikeSerializer(queryset, many=True)
    #     return Response(serializer.data)
    def retrieve(self,request, pk=None):
       
        pk = int(pk)
        if pk == request.user.id:
            print("yes")
            queryset = Like.objects.all()
            queryset = queryset.filter(owner=pk)
            serializer = LikeSerializer(queryset, many=True)
            return Response(serializer.data)
        return Response(data=None)
                
    # def create(self, request):
    #     serializer = LikeSerializer(data=request.data)
    #     if serializer.is_valid():
    #         like = serializer.save(owner=request.user)
    #         if like:
    #             json = serializer.data
    #             return Response(json, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
