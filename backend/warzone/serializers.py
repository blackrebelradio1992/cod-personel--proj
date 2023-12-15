# coldwar/serializers.py

from rest_framework import serializers
from .models import WarZoneData

class WarZoneDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = WarZoneData
        fields = '__all__'
