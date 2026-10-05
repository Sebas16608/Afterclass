from rest_framework import viewsets
from .serializers import CategorySerializers
from .models import Category
# Create your views here.
class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializers

    def get_queryset(self):
        return Category.objects.all() # type: ignore
