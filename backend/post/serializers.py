from rest_framework import serializers

from backend.category.models import Category
from backend.category.serializers import CategorySerializers
from .models import Thread, Post


class ThreadSerializer(serializers.ModelSerializer):
    category = CategorySerializers(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source="category", write_only=True)
    class Meta:
        model = Thread
        fields = ["id", "category", "category_id", "title", "content", "created_at", "is_pinned", "is_locked"]
        read_only_fields = ["id", "created_at"]

class PostSerializer(serializers.ModelSerializer):
    thread = ThreadSerializer(read_only=True)
    thread_id = serializers.PrimaryKeyRelatedField(queryset = Thread.objects.all(), source="thread", write_only=True)
    class Meta:
        model = Post
        fields = ["id", "thread", "thread_id", "content", "created_at"]
        read_only_fields = ["id", "created_at"]
