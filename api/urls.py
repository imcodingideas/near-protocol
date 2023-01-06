from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('questions/', views.getQuestions, name="questions"),
    path('questions/create/', views.createQuestion, name="create-question"),

    path('questions/<str:pk>/', views.getQuestion, name="question"),
]
