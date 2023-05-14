from django.urls import path

from . import views
from .views import PostView, AddPostView, AddCommentView, AddReplyView, UpvotePost, DownvotePost
from .views import GetPost, GetComment, GetReply, GetReportedPosts, GetReportedComments
from .views import ReportPost, ReportComment ,UpdatePostView, DeleteCommentView, DeletePostView

urlpatterns= [
    path("allposts",PostView.as_view(),name="posts"),
    path("addpost",AddPostView.as_view(), name="add_post"),
    path("updatepost",UpdatePostView.as_view(), name="update_post"),
    path("deletepost",DeletePostView.as_view(), name="delete_post"),
    path("addcomment",AddCommentView.as_view(), name="add_comment"),
    path("deletecomment",DeleteCommentView.as_view(), name="delete_comment"),
    path("addreply", AddReplyView.as_view(), name="add_reply"),
    path("getpost", GetPost.as_view(), name="get_post"),
    path("getcomment",GetComment.as_view(), name="get_comment"),
    path("getreportedposts", GetReportedPosts.as_view(), name="get_reported_posts"),
    path("getreportedcomments",GetReportedComments.as_view(), name="get_reported_comments"),
    path("getreply",GetReply.as_view(),name="get_reply"),
    path("upvotepost", UpvotePost.as_view(),name="upvote_post"),
    path("downvotepost", DownvotePost.as_view(),name="downvote_post"),
    path("reportpost", ReportPost.as_view(), name="report_post"),
    path("reportcomment",ReportComment.as_view(), name="report_comment"),
]