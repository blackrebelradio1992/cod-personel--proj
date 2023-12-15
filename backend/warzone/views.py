from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from cod_api import API, platforms
from .models import WarZoneData
from .serializers import WarZoneDataSerializer
from rest_framework import viewsets

# Create your views here.
class WarZoneDataViewSet(viewsets.ModelViewSet):
    queryset = WarZoneData.objects.all()
    serializer_class = WarZoneDataSerializer



# def warzone(request, gamer_tag):
#     api = API()
#     api.login('your_sso_token')
#     data = api.ModernWarfare2.fullData(platforms.Battlenet, gamer_tag)

#     # Save the data to your Django model
#     warzone_data, created = WarZoneData.objects.get_or_create(
#         gamer_tag=gamer_tag,
#         defaults={'kills': data.get('kills', 0), 'deaths': data.get('deaths', 0), 'k_d_ratio': data.get('k_d_ratio', 0), 'w_l_ratio': data.get('w_l_ratio', 0), 'win': data.get('win', 0), 'losses': data.get('losses', 0), 'highest_kill_streak': data.get('highest_kill_streak', 0), 'most_kill_in_game': data.get('most_kill_in_game', 0)}
#     )


#     return JsonResponse({
#         'gamer_tag': gamer_tag,
#         'total_time_played': warzone_data.total_time_played,
#         'games_played': warzone_data.games_played,
#         'avg_kill_per_games': warzone_data.avg_kills_per_game,
#         'k_d_ratio': warzone_data.k_d_ratio,
#         'kills': warzone_data.kills,
#         'deaths': warzone_data.deaths,
#         'w_l_ratio': warzone_data.w_l_ratio,
#         'wins': warzone_data.wins,
#         'losses': warzone_data.losses,
#         'highest_kill_streak': warzone_data.highest_kill_streak,
#         'most_kill_in_game': warzone_data.most_kill_in_game,
#         # Add other fields as needed
#     })