from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from cod_api import API, platforms
from .models import ColdWarData
from.serializers import ColdWarDataSerializer
from rest_framework import viewsets
from rest_framework import generics

# Create your views here.
class ColdWarDataViewSet(viewsets.ModelViewSet):
    queryset = ColdWarData.objects.all()
    serializer_class = ColdWarDataSerializer


class ColdWarDataDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ColdWarData.objects.all()
    serializer_class = ColdWarDataSerializer

class ColdWarDataListCreateView(generics.ListCreateAPIView):
    queryset = ColdWarData.objects.all()
    serializer_class = ColdWarDataSerializer
# def coldwar(request, gamer_tag):
#     api = API()
#     api.login('your_sso_token')
#     data = api.ColdWar.fullData(platforms.Battlenet, gamer_tag)

#     # Save the data to your Django model
#     coldwar_data, created = ColdWarData.objects.get_or_create(
#         gamer_tag=gamer_tag,
#         defaults={'kills': data.get('kills', 0), 'deaths': data.get('deaths', 0), 'k_d_ratio': data.get('k_d_ratio', 0), 'w_l_ratio': data.get('w_l_ratio', 0), 'win': data.get('win', 0), 'losses': data.get('losses', 0), 'highest_kill_streak': data.get('highest_kill_streak', 0), 'most_kill_in_game': data.get('most_kill_in_game', 0)}
#     )

#     return JsonResponse({
#         'gamer_tag': gamer_tag,
#         'total_time_played': coldwar_data.total_time_played,
#         'games_played': coldwar_data.games_played,
#         'avg_kill_per_games': coldwar_data.avg_kills_per_game,
#         'k_d_ratio': coldwar_data.k_d_ratio,
#         'kills': coldwar_data.kills,
#         'deaths': coldwar_data.deaths,
#         'w_l_ratio': coldwar_data.w_l_ratio,
#         'wins': coldwar_data.wins,
#         'losses': coldwar_data.losses,
#         'highest_kill_streak': coldwar_data.highest_kill_streak,
#         'most_kill_in_game': coldwar_data.most_kill_in_game,
#         # Add other fields as needed
#     })