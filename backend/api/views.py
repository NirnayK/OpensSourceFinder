from rest_framework import generics
from .models import  Language, License, Topic
from .serializers import LanguageSerializer, LicenseSerializer, TopicSerializer

class TopicListAPIView(generics.ListAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer

class LanguageListAPIView(generics.ListAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

class LicenseListAPIView(generics.ListAPIView):
    queryset = License.objects.all()
    serializer_class = LicenseSerializer
