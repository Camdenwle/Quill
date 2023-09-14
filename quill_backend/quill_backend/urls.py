from django.contrib import admin
from django.urls import re_path, include
from ContractDatabase.views import *

urlpatterns = [
    re_path('admin/', admin.site.urls),
    re_path('', ContractView.as_view(), name='contracts'),
    re_path('contracts/<int:pk>/', DeleteContract.as_view(), name='delete_contract'),

]
