from django.urls import path
from django.views.generic import TemplateView


app_name = 'contract'


urlpatterns = [
    path('', TemplateView.as_view(template_name = "contract/index.html")),


 ]
