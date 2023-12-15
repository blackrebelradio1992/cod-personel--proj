# Generated by Django 4.2.7 on 2023-12-15 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ModernWarfare2Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gamer_tag', models.CharField(max_length=50)),
                ('time_played_start', models.DateTimeField(auto_now_add=True)),
                ('time_played_end', models.DateTimeField(blank=True, null=True)),
                ('total_time_played', models.DurationField(blank=True, null=True)),
                ('games_played', models.IntegerField()),
                ('avg_kills_per_game', models.IntegerField()),
                ('k_d_ratio', models.IntegerField()),
                ('kills', models.IntegerField()),
                ('deaths', models.IntegerField()),
                ('w_l_ratio', models.IntegerField()),
                ('wins', models.IntegerField()),
                ('losses', models.IntegerField()),
                ('highest_kill_streak', models.IntegerField()),
                ('most_kill_in_game', models.IntegerField()),
            ],
        ),
    ]
