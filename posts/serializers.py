from rest_framework import serializers

from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model= Post
        fields= ('id','author','body','is_reported','upvotes','downvotes')

class AddPostSerializer(serializers.Serializer):
    body= serializers.CharField(max_length= 2000)