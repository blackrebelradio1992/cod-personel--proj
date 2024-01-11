# coldwar/urls.py

from rest_framework.routers import DefaultRouter
from .views import ModernWarfareDataViewSet

router = DefaultRouter()
router.register(r'Modernwarfare', ModernWarfareDataViewSet, basename='modernwarfaredata')
urlpatterns = router.urls
