from rest_framework import serializers
from .models import ModernWarfare2Data

class ModernWarfare2DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModernWarfare2Data
        fields = '__all__'