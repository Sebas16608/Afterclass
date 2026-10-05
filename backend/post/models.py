from django.db import models


class Thread(models.Model):
    category = models.ForeignKey("category.Category", on_delete=models.PROTECT, related_name="threads")
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_pinned = models.BooleanField(default=False)
    is_locked = models.BooleanField(default=False)

    class Meta:
        ordering = ["-is_pinned", "-created_at"]
        verbose_name = "Thread"
        verbose_name_plural = "Threads"

    def __str__(self) -> str:
        return f"Thread {self.pk}, {self.title}"

class Post(models.Model):
    thread = models.ForeignKey(Thread, on_delete=models.CASCADE, related_name="posts")
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]
        verbose_name = "Post"
        verbose_name_plural = "Posts"

    def __str__(self) -> str:
        return f"{self.content}"
