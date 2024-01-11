# coldwar/urls.py

from rest_framework.routers import DefaultRouter
from .views import WarZone2DataViewSet

router = DefaultRouter()
router.register(r'warzone2data', WarZone2DataViewSet, basename='warzone2data ')
urlpatterns = router.urls
