from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics

from .models import Post
from .serializers import PostSerializer

# Create your views here.
class Postview(generics.CreateAPIView):
    queryset= Post.objects.all()
    serializer_class= PostSerializer


def index(request):
    return HttpResponse("This is index page")