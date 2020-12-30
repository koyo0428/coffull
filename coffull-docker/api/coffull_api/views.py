from rest_framework import generics
from .models import Coffee
from .serializers import CoffeeSerializer

class CoffeeAPIView(generics.ListAPIView):
    queryset = Coffee.objects.all()
    serializer_class = CoffeeSerializer