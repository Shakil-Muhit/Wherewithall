from django.urls import path

from . import views
from .views import PostView, AddPostView

urlpatterns= [
    path("allposts",PostView.as_view(),name="posts"),
    path("addpost",AddPostView.as_view(), name="add_post")
]