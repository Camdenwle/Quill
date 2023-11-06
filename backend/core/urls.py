from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('contract.urls', namespace='contract')),
    path('api/', include('contract_api.urls', namespace='contract_api')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),


]
 
