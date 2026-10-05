from rest_framework import viewsets
from .serializers import ThreadSerializer, PostSerializer
from .models import Thread, Post

class ThreadViewSet(viewsets.ModelViewSet):
    serializer_class = ThreadSerializer

    def get_queryset(self): # type: ignore
        qs = Thread.objects.select_related("category").all()
        category_id = self.request.query_params.get("category") # type: ignore
        if category_id:
            qs = qs.filter(category_id=category_id)
        return qs

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self): # type: ignore
        qs = Post.objects.select_related("thread").all() # type: ignore
        thread_id = self.request.query_params.get("thread") # type: ignore
        parent_id = self.request.query_params.get("parent") # type: ignore
        if thread_id:
            qs = qs.filter(thread_id=thread_id, parent__isnull=True)
        if parent_id:
            qs = qs.filter(parent_id=parent_id)
        return qs
