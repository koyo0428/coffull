from django.urls import path
from .views import CoffeeListAPIView
from .views import CoffeeDetailAPIView

urlpatterns = [
    path('<int:pk>/', CoffeeDetailAPIView.as_view()),
    path('', CoffeeListAPIView.as_view()),
]