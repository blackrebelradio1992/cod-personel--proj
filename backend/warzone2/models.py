from django.db import models
# from backend/me/apps.py import User

# Create your models here.

class WarZone2Data(models.Model):
    gamer_tag = models.CharField(max_length=50)
    time_played_start = models.DateTimeField(auto_now_add=True)
    time_played_end = models.DateTimeField(blank=True, null=True)
    total_time_played = models.DurationField(null=True, blank=True)
    games_played = models.IntegerField()
    avg_kills_per_game = models.IntegerField()
    k_d_ratio = models.IntegerField()
    kills = models.IntegerField()
    deaths = models.IntegerField()
    w_l_ratio = models.IntegerField()
    wins = models.IntegerField()
    losses = models.IntegerField()
    highest_kill_streak = models.IntegerField()
    most_kill_in_game = models.IntegerField()    
    # Add other fields as needed

    def __str__(self):
        return f"{self.gamer_tag}, {self.total_time_played}, {self.games_played}, {self.avg_kills_per_game}, {self.k_d_ratio}, {self.kills}, {self.deaths}, {self.w_l_ratio}, {self.wins}, {self.losses}, {self.highest_kill_streak}, {self.most_kill_in_game}"

    def save(self, *args, **kwargs):
        if self.time_played_start and self.time_played_end:
            self.total_time_played = self.time_played_end - self.time_played_start
        super().save(*args, **kwargs)