from rest_framework import generics
from .models import  Language, License, Tag
from .serializers import LanguageSerializer, LicenseSerializer, TagSerializer

class TagListAPIView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class LanguageListAPIView(generics.ListAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

class LicenseListAPIView(generics.ListAPIView):
    queryset = License.objects.all()
    serializer_class = LicenseSerializer
