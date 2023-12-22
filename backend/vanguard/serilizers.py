# coldwar/serializers.py

from rest_framework import serializers
from .models import VanguardData

class VanguardDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = VanguardData
        fields = '__all__'
