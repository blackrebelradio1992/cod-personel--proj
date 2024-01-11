from rest_framework import serializers
from .models import ModernWarfareData

class ModernWarfareDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModernWarfareData
        fields = '__all__'