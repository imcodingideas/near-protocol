from rest_framework.serializers import ModelSerializer
from api.models import Question

class QuestionSerializer(ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'