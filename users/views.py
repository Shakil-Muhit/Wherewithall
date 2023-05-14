from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse

from .serializers import UserSerializer, LoginSerializer, ProfileSerializer
from .serializers import UserPostsSerializer
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm 
from .models import Profile
from posts.models import Post
from posts.serializers import PostSerializer

# Create your views here.
class RegisterUserView(generics.CreateAPIView):
    serializer_class= UserSerializer

    def post(self, request, format= None):
        serializer= self.serializer_class(data= request.data)
        # print(request.data)
        if serializer.is_valid():
            username= serializer.data.get('username')
            password= serializer.data.get('password')
            # user= User(username=username,password=password)
            user= User.objects.create_user(username=username,password=password)
            user.save()

            profile= Profile(user= user, username= username)
            profile.save()
            login(request,user)
            return Response(UserSerializer(User(username= username, password= password)).data, status= status.HTTP_201_CREATED)
        else : print("!!!")
        return Response(UserSerializer(User(username= username, password= password)).data, status= status.HTTP_400_BAD_REQUEST)

class LoginUserView(generics.CreateAPIView):
    serializer_class= LoginSerializer

    def post(self, request, format= None):
        serializer= self.serializer_class(data= request.data)
        print(request.data)
        if serializer.is_valid():
            username= serializer.data.get('username')
            password= serializer.data.get('password')

            user= authenticate(request, username= username, password= password)
            if user is not None:
                login(request,user)
                print(str(request.user.profile.username))

                return Response(UserSerializer(User(username=username,password=password)).data, status= status.HTTP_200_OK)
            return Response({'message': 'invalid'}, status= status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

class LogoutUserView(APIView):
    def post(self, request, format= None):
        if not request.user.is_authenticated:
            return Response({'message':'Not logged in'}, status= status.HTTP_400_BAD_REQUEST)
        logout(request)
        return Response({'message': 'Successfully logged out'}, status= status.HTTP_200_OK)

def logoutView(request):
    if not request.user.is_authenticated:
        return HttpResponse('Not logged in')
    logout(request)
    return HttpResponse('Successfully logged out')

class GetCurrentUser(APIView):
    def get(self,request, format= None):
        if not request.user.is_authenticated:
            return HttpResponse('Not logged in')
        return Response({'username': request.user.username}, status= status.HTTP_200_OK)
    
class GetProfile(APIView):
    serializer_class= ProfileSerializer

    def get(self, request, format= None):
        username= request.GET.get('username')
        if username != None:
            user = User.objects.filter(username=username)
            if len(user) > 0:
                return Response(ProfileSerializer(user[0].profile).data, status= status.HTTP_200_OK)
            return Response({'User Not Found': 'User does not exist'}, status= status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Invalid parameters'}, status= status.HTTP_400_BAD_REQUEST)
        
class GetUserPosts(APIView):
    serializer_class= PostSerializer

    def get(self, request, format=None):
        username= request.GET.get('username')
        if username != None:
            user= User.objects.filter(username=username)
            if len(user)>0:
                posts= Post.objects.filter(author= user[0])
                return Response(PostSerializer(posts,many= True).data, status= status.HTTP_200_OK)
            return Response({'User Not Found': 'User does not exist'}, status= status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Invalid parameters'}, status= status.HTTP_400_BAD_REQUEST)


def index(request):
    pass

# def login_view(request):
#     if request.method== "POST":
#         username= request.POST["username"]
#         password= request.POST["password"]

#         user= authenticate(request,username=username,password=password)
#         if user is not None:
#             pass
