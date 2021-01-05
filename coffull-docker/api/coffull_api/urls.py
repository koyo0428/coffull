from django.urls import path
from .views import CoffeeListAPIView
from .views import CoffeeDetailAPIView
from .views import CoffeeRegisterAPIView

urlpatterns = [
    path('<uuid:pk>/', CoffeeDetailAPIView.as_view()),
    path('', CoffeeListAPIView.as_view()),
    path('register', CoffeeRegisterAPIView.as_view()),
]