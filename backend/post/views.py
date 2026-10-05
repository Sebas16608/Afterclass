from rest_framework import viewsets
from .serializers import ThreadSerializer, PostSerializer
from .models import Thread, Post

class ThreadViewSet(viewsets.ModelViewSet):
    serializer_class = ThreadSerializer

    def get_queryset(self): # type: ignore
        return Thread.objects.select_related("category").all()

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self): # type: ignore
        return Post.objects.select_related("thread").all()
