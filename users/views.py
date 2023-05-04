from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.response import Response

from .serializers import RegisterUserSerializer
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm 

# Create your views here.
class RegisterUserView(generics.CreateAPIView):
    serializer_class= RegisterUserSerializer

    def post(self, request, format= None):
        serializer= self.serializer_class(data= request.data)
        if serializer.is_valid():
            username= serializer.data.get('username')
            password= serializer.data.get('password')
            # print(username)
            # print(password)
            form= UserCreationForm(request.POST)
            # user= User(username=username,password=password)
            user= User.objects.create_user(username=username,password=password)
            user.save()
            if form.is_valid():
                form.save()
        else : print("!!!")
        return Response(RegisterUserSerializer(User(username=username,password=password)).data, status= status.HTTP_201_CREATED)
    


def index(request):
    pass

# def login_view(request):
#     if request.method== "POST":
#         username= request.POST["username"]
#         password= request.POST["password"]

#         user= authenticate(request,username=username,password=password)
#         if user is not None:
#             pass
