from rest_framework.routers import DefaultRouter
from .views import ColdWarDataViewSet, ColdWarDataListCreateView, ColdWarDataDetailView
from django.urls import path


urlpatterns = [
    path('api/coldwardata/', ColdWarDataListCreateView.as_view(), name='coldwardata-list-create'),
    path('api/coldwardata/<int:pk>/', ColdWarDataDetailView.as_view(), name='coldwardata-detail'),
]