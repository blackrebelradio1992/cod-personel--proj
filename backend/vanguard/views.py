from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from cod_api import API, platforms
from .models import VanguardData
from rest_framework import viewsets
from .serilizers import VanguardDataSerializer

# Create your views here.
class VanguardDataViewSet(viewsets.ModelViewSet):
    queryset = VanguardData.objects.all()
    serializer_class = VanguardDataSerializer
# def get_vanguard_data(request, gamer_tag):
#     api = API()
#     api.login('your_sso_token')
#     data = api.Vanguard.fullData(platforms.Battlenet, gamer_tag)

#     # Save the data to your Django model
#     vanguard_data, created = VanguardData.objects.get_or_create(
#         gamer_tag=gamer_tag,
#         defaults={'kills': data.get('kills', 0), 'deaths': data.get('deaths', 0), 'k_d_ratio': data.get('k_d_ratio', 0), 'w_l_ratio': data.get('w_l_ratio', 0), 'win': data.get('win', 0), 'losses': data.get('losses', 0), 'highest_kill_streak': data.get('highest_kill_streak', 0), 'most_kill_in_game': data.get('most_kill_in_game', 0)}
#     )


#     return JsonResponse({
#         'gamer_tag': gamer_tag,
#         'total_time_played': vanguard_data.total_time_played,
#         'games_played': vanguard_data.games_played,
#         'avg_kill_per_games': vanguard_data.avg_kills_per_game,
#         'k_d_ratio': vanguard_data.k_d_ratio,
#         'kills': vanguard_data.kills,
#         'deaths': vanguard_data.deaths,
#         'w_l_ratio': vanguard_data.w_l_ratio,
#         'wins': vanguard_data.wins,
#         'losses': vanguard_data.losses,
#         'highest_kill_streak': vanguard_data.highest_kill_streak,
#         'most_kill_in_game': vanguard_data.most_kill_in_game,
#         # Add other fields as needed
#     })