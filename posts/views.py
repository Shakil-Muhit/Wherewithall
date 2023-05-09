from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Post, Comment, Reply
from .serializers import AddPostSerializer, AddCommentSerializer, AddReplySerializer
from .serializers import PostSerializer, CommentSerializer, ReplySerializer

# Create your views here.
class PostView(generics.CreateAPIView):
    queryset= Post.objects.all()
    serializer_class= PostSerializer

class AddPostView(generics.CreateAPIView):
    serializer_class= AddPostSerializer

    def post(self, request, format= None):
        if not request.user.is_authenticated:
            return Response({'message': 'Not logged in'}, status= status.HTTP_400_BAD_REQUEST)
        serializer= self.serializer_class(data= request.data)
        if serializer.is_valid():
            body= request.data.get('body')
            post= Post(author= request.user, body= body)
            post.save()

            return Response(PostSerializer(post).data, status= status.HTTP_201_CREATED)
        return Response({'message': 'invalid input'}, status= status.HTTP_400_BAD_REQUEST)

class AddCommentView(generics.CreateAPIView):
    serializer_class= AddCommentSerializer

    def post(self, request, format= None):
        if not request.user.is_authenticated:
            return Response({'message': 'Not logged in'}, status= status.HTTP_400_BAD_REQUEST)
        serializer= self.serializer_class(data= request.data)
        if serializer.is_valid():
            postid= request.data.get('post_id')
            postList= Post.objects.filter(id=postid)
            if len(postList)>0 :
                post= postList[0]
                body= request.data.get('body')
                comment= Comment(author= request.user, post=post, body= body)
                comment.save()

                return Response(AddCommentSerializer(comment).data, status= status.HTTP_201_CREATED)
            return Response({'message':'Post does not exist'}, status= status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'invalid input'}, status= status.HTTP_400_BAD_REQUEST)
    
class AddReplyView(generics.CreateAPIView):
    serializer_class= AddReplySerializer

    def post(self, request, format= None):
        if not request.user.is_authenticated:
            return Response({'message': 'Not logged in'}, status= status.HTTP_400_BAD_REQUEST)
        serializer= self.serializer_class(data= request.data)
        if serializer.is_valid():
            commentid= request.data.get('comment_id')
            commentList= Post.objects.filter(id=commentid)
            if len(commentList)>0 :
                comment= commentList[0]
                body= request.data.get('body')
                reply= Reply(author= request.user, comment= comment, body= body)
                reply.save()

                return Response(AddCommentSerializer(comment).data, status= status.HTTP_201_CREATED)
            return Response({'message':'Comment does not exist'}, status= status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'invalid input'}, status= status.HTTP_400_BAD_REQUEST)
    
class GetPost(APIView):
    serializer_class= PostSerializer

    def get(self, request, format= None):
        postid= request.GET.get('post_id')
        if postid != None:
            post = Post.objects.filter(id=postid)
            if len(post) > 0:
                return Response(PostSerializer(post[0]).data, status= status.HTTP_200_OK)
            return Response({'Post Not Found': 'Post does not exist'}, status= status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Invalid parameters'}, status= status.HTTP_400_BAD_REQUEST)

class GetComment(APIView):
    serializer_class= CommentSerializer

    def get(self, request, format= None):
        commentid= request.GET.get('comment_id')
        if commentid != None:
            comment = Comment.objects.filter(id=commentid)
            if len(comment) > 0:
                return Response(CommentSerializer(comment[0]).data, status= status.HTTP_200_OK)
            return Response({'Comment Not Found': 'Comment does not exist'}, status= status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Invalid parameters'}, status= status.HTTP_400_BAD_REQUEST)

class GetReply(APIView):
    serializer_class= ReplySerializer

    def get(self, request, format= None):
        replyid= request.GET.get('reply_id')
        if replyid != None:
            reply = Reply.objects.filter(id=replyid)
            if len(reply) > 0:
                return Response(ReplySerializer(reply[0]).data, status= status.HTTP_200_OK)
            return Response({'Reply Not Found': 'Reply to the comment does not exist'}, status= status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Invalid parameters'}, status= status.HTTP_400_BAD_REQUEST)    
    
# class GetPostComments(APIView):

#     se

def index(request):
    return HttpResponse("This is index page")