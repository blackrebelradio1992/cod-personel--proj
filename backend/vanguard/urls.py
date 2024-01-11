# coldwar/urls.py

from rest_framework.routers import DefaultRouter
from .views import VanguardDataViewSet

router = DefaultRouter()
router.register(r'Vanguard', VanguardDataViewSet, basename='Vanguarddata')
urlpatterns = router.urls
