from rest_framework import serializers
from .models import ColdWarData

class ColdWarDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ColdWarData
        fields = '__all__'