from rest_framework import serializers

from category.models import Category
from category.serializers import CategorySerializer
from .models import Thread, Post


class ThreadSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source="category", write_only=True)
    class Meta:
        model = Thread
        fields = ["id", "category", "category_id", "title", "content", "author", "created_at", "updated_at", "is_pinned", "is_locked"]
        read_only_fields = ["id", "created_at"]

class PostSerializer(serializers.ModelSerializer):
    thread = ThreadSerializer(read_only=True)
    thread_id = serializers.PrimaryKeyRelatedField(queryset = Thread.objects.all(), source="thread", write_only=True)
    parent = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all(), allow_null=True, required=False)
    class Meta:
        model = Post
        fields = ["id", "thread", "thread_id", "content", "author", "parent", "created_at"]
        read_only_fields = ["id", "created_at"]
