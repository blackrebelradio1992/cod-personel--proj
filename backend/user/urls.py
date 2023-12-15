# users/urls.py
from django.urls import path
from .views import UserListView, UserDetailView

urlpatterns = [
    path('api/users/', UserListView.as_view(), name='user-list'),
    path('api/users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
]
