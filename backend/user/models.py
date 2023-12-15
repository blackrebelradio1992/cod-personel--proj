from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.CharField(max_length=255, unique=True)
    username = models.CharField(max_length=255)
    gamer_tag = models.CharField(max_length=50)
    password = models.CharField(max_length=255)


    def __str__(self):
        return self.username