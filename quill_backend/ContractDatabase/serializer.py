from rest_framework import serializers
from .models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields  = ['title', 'content', 'created_at', 'last_updated', 'creator']

        