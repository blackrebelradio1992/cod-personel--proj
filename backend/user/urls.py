# users/urls.py
from django.urls import path
from .views import UserListView, UserDetailView, UserCreateView
# from .views import update_cod_info

urlpatterns = [
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('users/create', UserCreateView.as_view(), name='create-user')
    # path('update-cod-info/', update_cod_info, name='update_cod_info'),
]
