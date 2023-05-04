from django.urls import path

from . import views
from .views import Postview

urlpatterns= [
    path("",Postview.as_view(),name="posts")
]