from django.conf import settings
from django.db import models
from django.contrib.auth.models import User, AbstractUser


class Contract(models.Model):
    title = models.CharField(max_length=100, default="")
    content = models.TextField(max_length=500, default="")
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    last_updated = models.DateTimeField(auto_now=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, null=True)  # Use the User model




