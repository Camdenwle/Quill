from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields  = ['title', 'content', 'created_at', 'last_updated', 'creator']



