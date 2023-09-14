from rest_framework import generics
from .models import Contract
from .serializer import ReactSerializer


class ContractView(generics.ListCreateAPIView):
    queryset = Contract.objects.all()
    serializer_class = ReactSerializer


class DeleteContract(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contract.objects.all()
    serializer_class = ReactSerializer




