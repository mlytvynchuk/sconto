from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from scontoapi import settings
from django.contrib.auth import get_user_model


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=get_user_model().objects.all())]
    )
    password = serializers.CharField(min_length=8, write_only=True)

    def create(self, validated_data):
        user = get_user_model().objects._create_user(validated_data['email'],
                                                     validated_data['password'])
        return user

    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'password')
