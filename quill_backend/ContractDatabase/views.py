from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response


class ReactView(APIView):
    def get(self, request):
        output = [{'title': output.title,
                    'content': output.content,
                    'created_at': output.created_at,
                    'last_updated': output.last_updated,
                    'creator': output.creator}
                    for output in Contract.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)




