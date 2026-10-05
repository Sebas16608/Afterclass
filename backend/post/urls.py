from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ThreadViewSet, PostViewSet

router = DefaultRouter()

router.register("threads", ThreadViewSet, basename="threads")
router.register("posts", PostViewSet, basename="posts")

urlpatterns = [
    path("", include(router.urls))
]
