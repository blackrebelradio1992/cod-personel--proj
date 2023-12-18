# users/urls.py
from django.urls import path
# from .views import UserListView, UserDetailView
from .views import update_cod_info

urlpatterns = [
    # path('api/users/', UserListView.as_view(), name='user-list'),
    # path('api/users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('update-cod-info/', update_cod_info, name='update_cod_info'),
]
