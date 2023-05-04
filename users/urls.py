from django.urls import path

from . import views
from .views import RegisterUserView

urlpatterns= [
    path("",RegisterUserView.as_view(),name="index"),
    # path("login_view",views.login,name="login"),
    # path("logout_view",views.logout,name="logout")
]