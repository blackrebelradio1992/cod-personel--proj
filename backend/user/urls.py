from django.urls import path
from .views import (
    UserListView,
    UserDetailView,
    UserCreateView,
    UserDeleteView,
    ChangePasswordView,
    CurrentUserIdView,
    GetUserIdByUsernameView,
    TokenObtainPairView,
)

urlpatterns = [
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('users/create/', UserCreateView.as_view(), name='create-user'),
    path('users/<int:pk>/delete/', UserDeleteView.as_view(), name='delete-user'),
    path('users/change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('current-user-id/', CurrentUserIdView.as_view(), name='current-user-id'),
    path('get-user-id-by-username/<str:username>/', GetUserIdByUsernameView.as_view(), name='get-user-id-by-username'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('register/', UserCreateView.as_view(), name='user-create'),
]
