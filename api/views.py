from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Question
from .serializers import QuestionSerializer

@api_view(['GET'])
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
            'Endpoint': '/questions/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new question with data sent in post request'
        }
    ]

    return Response(routes)

# /questions GET
# /questions/<id> GET

@api_view(['GET'])
def getQuestions(request):
    questions = Question.objects.all().order_by('-created_at')
    serializer = QuestionSerializer(questions, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getQuestion(request, pk):
    question = Question.objects.get(id=pk)
    serializer = QuestionSerializer(question, many=False)
    return Response(serializer.data)