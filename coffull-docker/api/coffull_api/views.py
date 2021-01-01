from rest_framework import generics
from .models import Coffee
from .serializers import CoffeeListSerializer
from .serializers import CoffeeDetailSerializer


class CoffeeListAPIView(generics.ListAPIView):
    
    queryset = Coffee.objects.all()
    serializer_class = CoffeeListSerializer

class CoffeeDetailAPIView(generics.RetrieveAPIView):
    
    queryset = Coffee.objects.all()
    serializer_class = CoffeeDetailSerializer