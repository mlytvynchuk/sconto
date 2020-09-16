from django.shortcuts import render
from rest_framework import viewsets, routers, permissions
from rest_framework.response import Response
from discounts.models import Discount, Like
from .serializers import DiscountSerializer, LikeSerializer, LikeCreateSerializer, DiscountCreateSerializer
from rest_framework.authentication import TokenAuthentication
from django.views.decorators.csrf import csrf_exempt


class DiscountsViewSet(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountCreateSerializer

    def list(self, request):
        queryset = Discount.objects.all()
        serializer = DiscountSerializer(queryset, many=True)
        return Response(serializer.data)


class LikesViewSet(viewsets.ModelViewSet):
    serializer_class = LikeCreateSerializer
    queryset = Like.objects.all()

    def list(self, request):
        return Response(data=None)

    def retrieve(self, request, pk=None):
        pk = int(pk)
        if pk == request.user.id:
            print("yes")
            queryset = Like.objects.all()
            queryset = queryset.filter(owner=pk)
            serializer = LikeSerializer(queryset, many=True)
            return Response(serializer.data)
        return Response(data=None)

    @csrf_exempt
    def destroy(self, request, pk=None):
        if request.method == "DELETE":
            like = Like.objects.get(id=pk)
            print(like.owner.id, request.user.id)
            if like.owner.id == request.user.id:
                like.delete()
        return Response(data=None)
