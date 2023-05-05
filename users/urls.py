from django.urls import path

from . import views
from .views import RegisterUserView, LoginUserView

urlpatterns= [
    path("createuser",RegisterUserView.as_view(),name="registeruser"),
    path("login", LoginUserView.as_view(), name="login"),
    path("logout", views.logoutView, name="logout")
    # path("login_view",views.login,name="login"),
    # path("logout_view",views.logout,name="logout")
]