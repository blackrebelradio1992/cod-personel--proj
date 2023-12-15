from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from cod_api import API, platforms
from .models import User
from rest_framework import generics
from .serializers import UserSerializer

# Create your views here.
class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@login_required
def get_user_info(request):
    api = API()
    api.login('your_sso_token')

    me_info = api.Me.info()

    # If you created a model, you can save the information
    # Example: UserProfile.objects.update_or_create(user_id=me_info['id'], defaults={'username': me_info['username']})

    return JsonResponse(me_info)

def get_combat_history(request):
    api = API()
    # initiating the API class

    ## sync
     # login in with sso token
    api.login('your_sso_token')

     # retrieving combat history
    hist = api.Warzone.combatHistory(platforms.Battlenet, User.gamer_tag) # returns data of type dict
    async def get_combat_history():
        # login in with sso token
        await api.loginAsync('your_sso_token')

        # retrieving combat history
        hist = await api.Warzone.combatHistoryAsync(platforms.Battlenet, "Username#1234") # returns data of type dict

        # return results in json
        return JsonResponse(hist)
    
def get_match_details(request):
    api = API()
    # initiating the API class

    ## sync
     # login in with sso token
    api.login('your_sso_token')

     # retrieving combat history
    hist = api.Warzone.combatHistory(platforms.Battlenet, User.gamer_tag) # returns data of type dict
    async def get_combat_history():
        # login in with sso token
        await api.loginAsync('your_sso_token')

        # retrieving combat history
        hist = await api.Warzone.combatHistoryAsync(platforms.Battlenet, "Username#1234") # returns data of type dict

        # return results in json
        return JsonResponse(hist)