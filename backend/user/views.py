# user/views.py
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from cod_api import API, platforms
from .models import User
from rest_framework import generics, status
from .serializers import UserSerializer
from django.shortcuts import render, redirect
from .forms import CodInfoForm
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED, HTTP_202_ACCEPTED, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND, HTTP_200_OK, HTTP_401_UNAUTHORIZED, HTTP_204_NO_CONTENT
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view
from cod_api import API, platforms
from rest_framework_simplejwt.tokens import RefreshToken
# Create your views here.


@api_view(['GET'])
def get_cod_data(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        api = API()
        api.login(user.cod_sso_token)
        cod_data = api.ModernWarfare2.fullData(platforms.PSN, user.gamer_tag)
        return JsonResponse(cod_data)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['POST'])
def cod_mw2_data_view(request):
    # Extract user data from the request
    username = request.data.get('username')
    platform = request.data.get('platform')
    sso_token = request.data.get('sso_token')

    # Initialize COD API
    api = API()
    api.login(sso_token)

    # Fetch data from COD API (example: lifetime stats)
    try:
        cod_data = api.ModernWarfare2.fullData(platform, username)
        return JsonResponse(cod_data)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

class UserListView(APIView):
    def get(self,request):
        queryset = User.objects.all()
        userSerializer = UserSerializer(queryset, many=True)
        return Response(userSerializer.data)

class UserCreateView(APIView):
    def post(self, request, *args, **kwargs):
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()

            # Authenticate the user
            user = authenticate(username=request.data.get('user_name'), password=request.data.get('password'))
            if user:
                login(request, user)

                # Generate JWT tokens
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }, status=status.HTTP_201_CREATED)

        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserUpdateView(APIView):
    def put(self,request):
        userSerializer = UserSerializer(data=request.data)


class UserDetailView(APIView):
    def put(self, request, pk):
        queryset = User.objects.all()
        user = User.objects.get(pk=pk)
        userSerializer = UserSerializer(user, data=request.data)
        if userSerializer.is_valid():
            userSerializer.save()
            return Response(userSerializer.data, status=HTTP_202_ACCEPTED)
        return Response(userSerializer.errors, status=HTTP_400_BAD_REQUEST)

class UserDeleteView(APIView):
    def delete(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
            user.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=HTTP_404_NOT_FOUND)

class TokenObtainPairView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            # Generate and return tokens (you may use a library like Django Rest Framework SimpleJWT)
            return Response({'access': 'your_access_token', 'refresh': 'your_refresh_token'}, status=HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=HTTP_401_UNAUTHORIZED)

class CurrentUserIdView(APIView):
    def get(self, request):
        return Response({'user_id': request.user.id})

class GetUserIdByUsernameView(APIView):
    def get(self, request, username):
        try:
            user = User.objects.get(username=username)
            return Response({'user_id': user.id}, status=HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=HTTP_404_NOT_FOUND)

class ChangePasswordView(APIView):
    def post(self, request):
        user = request.user
        old_password = request.data.get('old_password')
        new_password = request.data.get('new_password')

        if not user.check_password(old_password):
            return Response({'error': 'Incorrect old password'}, status=HTTP_400_BAD_REQUEST)

        user.set_password(new_password)
        user.save()

        return Response({'message': 'Password changed successfully'}, status=HTTP_200_OK)

# class UserCreateView(APIView):
#     def post(self, request, *args, **kwargs):
#         username = request.data.get('username')
#         password = request.data.get('password')

#         # Check if the username is already taken
#         if User.objects.filter(username=username).exists():
#             return Response({'error': 'Username already exists'}, status=HTTP_400_BAD_REQUEST)

#         # Create a new user
#         user = User.objects.create_user(username=username, password=password)

#         # Log in the new user
#         login(request, user)

#         # Return tokens or other relevant information
#         return Response({'access': 'your_access_token', 'refresh': 'your_refresh_token'}, status=HTTP_201_CREATED)