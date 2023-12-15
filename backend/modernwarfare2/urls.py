# coldwar/urls.py

from rest_framework.routers import DefaultRouter
from .views import ModernWarfareData2ViewSet

router = DefaultRouter()
router.register(r'Modernwarfare2', ModernWarfareData2ViewSet, basename='modernwarfare2data')
urlpatterns = router.urls
