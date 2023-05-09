from rest_framework import serializers

from .models import Post, Comment, Reply

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model= Post
        fields= ('id','author','body','is_reported','upvotes','downvotes')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Comment
        fields= ('id','author','body')

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model= Reply
        fields= ('id', 'comment', 'body')

class AddPostSerializer(serializers.Serializer):
    body= serializers.CharField(max_length= 2000)

class AddCommentSerializer(serializers.Serializer):
    body= serializers.CharField(max_length= 2000)

class AddReplySerializer(serializers.Serializer):
    body= serializers.CharField(max_length= 2000)
