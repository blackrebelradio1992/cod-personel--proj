from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from cod_api import API, platforms
from .models import ModernWarfare2Data
from rest_framework import viewsets
from .models import ModernWarfare2Data
from . serializers import ModernWarfare2DataSerializer


# Create your views here.
class ModernWarfareData2ViewSet(viewsets.ModelViewSet):
    queryset = ModernWarfare2Data.objects.all()
    serializer_class = ModernWarfare2DataSerializer


# def get_modernwarfare2_data(request, gamer_tag):
#     api = API()
#     api.login('your_sso_token')
#     data = api.ModernWarfare2.fullData(platforms.Battlenet, gamer_tag)

#     # Save the data to your Django model
#     modernwarfare2_data, created = ModernWarfare2Data.objects.get_or_create(
#         gamer_tag=gamer_tag,
#         defaults={'kills': data.get('kills', 0), 'deaths': data.get('deaths', 0), 'k_d_ratio': data.get('k_d_ratio', 0), 'w_l_ratio': data.get('w_l_ratio', 0), 'win': data.get('win', 0), 'losses': data.get('losses', 0), 'highest_kill_streak': data.get('highest_kill_streak', 0), 'most_kill_in_game': data.get('most_kill_in_game', 0)}
#     )


#     return JsonResponse({
#         'gamer_tag': gamer_tag,
#         'total_time_played': modernwarfare2_data.total_time_played,
#         'games_played': modernwarfare2_data.games_played,
#         'avg_kill_per_games': modernwarfare2_data.avg_kills_per_game,
#         'k_d_ratio': modernwarfare2_data.k_d_ratio,
#         'kills': modernwarfare2_data.kills,
#         'deaths': modernwarfare2_data.deaths,
#         'w_l_ratio': modernwarfare2_data.w_l_ratio,
#         'wins': modernwarfare2_data.wins,
#         'losses': modernwarfare2_data.losses,
#         'highest_kill_streak': modernwarfare2_data.highest_kill_streak,
#         'most_kill_in_game': modernwarfare2_data.most_kill_in_game,
#         # Add other fields as needed
#     })