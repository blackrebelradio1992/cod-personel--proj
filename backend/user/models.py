from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=255, default='Player')
    cod_sso_token = models.CharField(max_length=255, blank=True, null=True)
    # username = models.CharField(max_length=255)
    gamer_tag = models.CharField(max_length=50, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    cod_platform = models.CharField(max_length=20, blank=True, null=True)


    def __str__(self):
        return self.user_name