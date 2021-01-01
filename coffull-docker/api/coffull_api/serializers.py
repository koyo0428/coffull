from rest_framework import serializers

from .models import Coffee


class CoffeeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coffee
        fields = ('id','name', 'feature', 'taste', 'impressions')

class CoffeeDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coffee
        fields = ('id','name', 'feature', 'taste', 'impressions')