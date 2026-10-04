from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        ordering = ["name"]
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return f"Category {self.name}"
