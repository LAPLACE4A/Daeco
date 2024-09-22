from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

import recommend_DC as r
import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"
# Create your views here.
@api_view(['POST'])

def recommend(request):
    data = request.data

    try:
        result = r.recommend(data["gender"],
                             data["age"],
                             data["mbti"],
                             data["weather"],
                             data["amount"])
    except:
        error_response = {
            'message': '잘못된 json 수신!',
            'status': 'error'
        }
        return Response(error_response, status=status.HTTP_400_BAD_REQUEST)
    
    result = list(map(list, result))

    response_data = {"recommend": result,
                     "status": "success"}
    
    return Response(response_data, status=status.HTTP_200_OK)