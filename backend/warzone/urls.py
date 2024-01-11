# coldwar/urls.py

from rest_framework.routers import DefaultRouter
from .views import WarZoneDataViewSet

router = DefaultRouter()
router.register(r'warzonedata', WarZoneDataViewSet, basename='warzonedata ')
urlpatterns = router.urls
