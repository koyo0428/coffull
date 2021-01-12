from rest_framework import generics, status, viewsets, filters
from .models import CoffeeNote
from .serializers import CoffeeNoteSerializer
from .serializers import CoffeeNoteListSerializer
from .serializers import CoffeeNoteDetailSerializer
from .serializers import CofeeNoteRegisterSerializer
from .serializers import CoffeeNoteDestroySerializer
from rest_framework.response import Response

class CoffeeNoteViewSet(viewsets.ModelViewSet):

    class META:
        lookup_field = 'note_id'

    queryset = CoffeeNote.objects.all()
    serializer_class = CoffeeNoteSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name','feature','taste','impression']

class CoffeeNoteListAPIView(generics.ListAPIView):
    
    queryset = CoffeeNote.objects.all()
    serializer_class = CoffeeNoteListSerializer

class CoffeeNoteDetailAPIView(generics.RetrieveAPIView):
    
    queryset = CoffeeNote.objects.all()
    serializer_class = CoffeeNoteDetailSerializer

class CoffeeNoteRegisterAPIView(generics.CreateAPIView):
    queryset = CoffeeNote.objects.all()
    serializer_class = CofeeNoteRegisterSerializer

class CoffeeNoteDeleteAPIView(generics.DestroyAPIView):

    class META:
        lookup_field = 'note_id'

    queryset = CoffeeNote.objects.all()
    serializer_class = CoffeeNoteDestroySerializer
