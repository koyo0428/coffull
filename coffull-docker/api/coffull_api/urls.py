from django.urls import path, include
from rest_framework import routers
from .views import CoffeeNoteViewSet
from .views import CoffeeNoteListAPIView
from .views import CoffeeNoteDetailAPIView
from .views import CoffeeNoteRegisterAPIView
from .views import CoffeeNoteDeleteAPIView

router = routers.DefaultRouter()
router.register('coffee-note', CoffeeNoteViewSet)


urlpatterns = [
    path('coffull/', include(router.urls)),
    path('coffull-api/coffee-note/detail/<uuid:pk>/', CoffeeNoteDetailAPIView.as_view()),
    path('coffull-api/coffee-note/list', CoffeeNoteListAPIView.as_view()),
    path('coffull-api/coffee-note/register', CoffeeNoteRegisterAPIView.as_view()),
    path('coffull-api/coffee-note/delete/<uuid:pk>/', CoffeeNoteDeleteAPIView.as_view()),
]