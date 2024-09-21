from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['POST'])

def recommend(request):
    data = request.data

    response_data = {"age": data["age"]*10,
                     "status": "success"}
    
    return Response(response_data, status=status.HTTP_200_OK)