from django.urls import path
from .views import  LanguageListAPIView, LicenseListAPIView, TagListAPIView

app_name = 'core'

urlpatterns = [
    path('tags/', TagListAPIView.as_view(), name='tag-list'),
    path('languages/', LanguageListAPIView.as_view(), name='language-list'),
    path('licenses/', LicenseListAPIView.as_view(), name='license-list'),
]
