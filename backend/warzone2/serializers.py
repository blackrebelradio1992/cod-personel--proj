# coldwar/serializers.py

from rest_framework import serializers
from .models import WarZone2Data

class WarZone2DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = WarZone2Data
        fields = '__all__'
