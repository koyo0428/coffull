from rest_framework import serializers

from .models import CoffeeNote

class CoffeeNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoffeeNote
        fields = ('noteId','name', 'feature', 'taste', 'impression')

class CoffeeNoteListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoffeeNote
        fields = ('noteId','name', 'feature', 'taste', 'impression')

class CoffeeNoteDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoffeeNote
        fields = ('noteId','name', 'feature', 'taste', 'impression')

class CofeeNoteRegisterSerializer(serializers.ModelSerializer):

        model = CoffeeNote
        fields = ('noteId','name', 'feature', 'taste', 'impression')

class CoffeeNoteDestroySerializer(serializers.ModelSerializer):
    uuid = serializers.UUIDField(format='hex')
    class Mata:
        model = CoffeeNote
        fields = ('note_id','name', 'feature', 'taste', 'impressions')
