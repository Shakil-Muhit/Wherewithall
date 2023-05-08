from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Post
from .serializers import PostSerializer, AddPostSerializer

# Create your views here.
class PostView(generics.CreateAPIView):
    queryset= Post.objects.all()
    serializer_class= PostSerializer

class AddPostView(generics.CreateAPIView):
    serializer_class= AddPostSerializer

    def post(self, request, format= None):
        if not request.user.is_authenticated:
            return Response({'message': 'Not logged in'}, status= status.HTTP_400_BAD_REQUEST)
        serializer= self.serializer_class(data= request.data)
        if serializer.is_valid():
            body= request.data.get('body')
            post= Post(author= request.user, body= body)
            post.save()

            return Response(PostSerializer(post).data, status= status.HTTP_201_CREATED)
        return Response({'message': 'invalid input'}, status= status.HTTP_400_BAD_REQUEST)



def index(request):
    return HttpResponse("This is index page")