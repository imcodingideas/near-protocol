from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/questions/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of questions'
        },
        {
            'Endpoint': '/questions/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single question object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new question with data sent in post request'
        }
    ]

    return JsonResponse(routes, safe=False)