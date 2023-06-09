from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    username = models.CharField(max_length= 50)
    following = models.ManyToManyField(User, related_name="followers", blank=True)
    bio = models.CharField(default="",blank=True,null=True,max_length=350)
    gender = models.CharField(max_length=15)
    profession = models.CharField(max_length=25)
    email = models.CharField(max_length=50)
    is_moderator = models.BooleanField(default=False)
    ban_status= models.IntegerField(default=0)
    master_key= models.IntegerField(default=0)
    # image = models.ImageField(default='default.jpg', upload_to='profile_pics',blank=True, null=True)




    
