from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.response import Response

from .serializers import UserSerializer
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm 
from .models import Profile

# Create your views here.
class RegisterUserView(generics.CreateAPIView):
    serializer_class= UserSerializer

    def post(self, request, format= None):
        serializer= self.serializer_class(data= request.data)
        if serializer.is_valid():
            username= serializer.data.get('username')
            password= serializer.data.get('password')
            # user= User(username=username,password=password)
            user= User.objects.create_user(username=username,password=password)
            user.save()

            profile= Profile(user= user)
            profile.save()
        else : print("!!!")
        return Response(UserSerializer(User(username=username,password=password)).data, status= status.HTTP_201_CREATED)
    


def index(request):
    pass

# def login_view(request):
#     if request.method== "POST":
#         username= request.POST["username"]
#         password= request.POST["password"]

#         user= authenticate(request,username=username,password=password)
#         if user is not None:
#             pass
