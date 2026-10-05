from rest_framework import viewsets
from .serializers import CategorySerializer
from .models import Category
# Create your views here.
class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer

    def get_queryset(self): # type: ignore
        return Category.objects.all()
