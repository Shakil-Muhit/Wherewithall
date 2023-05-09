from django.urls import path

from . import views
from .views import PostView, AddPostView, AddCommentView, AddReplyView
from .views import GetPost, GetComment, GetReply

urlpatterns= [
    path("allposts",PostView.as_view(),name="posts"),
    path("addpost",AddPostView.as_view(), name="add_post"),
    path("addcomment",AddCommentView.as_view(), name="add_comment"),
    path("addreply", AddReplyView.as_view(), name="add_reply"),
    path("getpost", GetPost.as_view(), name="get_post"),
    path("getcomment",GetComment.as_view(), name="get_comment"),
    path("getreply",GetReply.as_view(),name="get_reply"),
]