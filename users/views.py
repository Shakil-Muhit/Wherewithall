from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse

from .serializers import UserSerializer, LoginSerializer, LogoutSerializer
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm 
from .models import Profile

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

def index(request):
    pass

# def login_view(request):
#     if request.method== "POST":
#         username= request.POST["username"]
#         password= request.POST["password"]

#         user= authenticate(request,username=username,password=password)
#         if user is not None:
#             pass
