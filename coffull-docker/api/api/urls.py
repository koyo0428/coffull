from django.urls import path
from .views import CoffeeAPIView

urlpatterns = [
    path('', CoffeeAPIView.as_view()),
]