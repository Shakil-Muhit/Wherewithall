from django.urls import path

from . import views
from .views import RegisterUserView, LoginUserView, LogoutUserView, GetProfile
from .views import GetUserPosts, GetCurrentUser, GetCurrentUserPosts

urlpatterns= [
    path("createuser",RegisterUserView.as_view(),name="registeruser"),
    path("login", LoginUserView.as_view(), name="login"),
    path("logout", LogoutUserView.as_view() , name="logout"),
    path("getuser", GetProfile.as_view(), name="get_user"),
    path("getuserposts",GetUserPosts.as_view(), name="get_user_posts"),
    path("getcurrentuser",GetCurrentUser.as_view(), name="get_current_user"),
    path("getcurrentuserposts",GetCurrentUserPosts.as_view(), name="get_current_user_posts"),
    # path("login_view",views.login,name="login"),
    # path("logout_view",views.logout,name="logout")
]