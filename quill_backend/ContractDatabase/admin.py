from django.contrib import admin
from .models import Contract


class Contracts(admin.ModelAdmin):
    pass


admin.site.register(Contract, Contracts)
