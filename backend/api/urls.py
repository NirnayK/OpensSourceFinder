from django.urls import path
from .views import  LanguageListAPIView, LicenseListAPIView, TopicListAPIView

app_name = 'core'

urlpatterns = [
    path('topics/', TopicListAPIView.as_view(), name='topic-list'),
    path('languages/', LanguageListAPIView.as_view(), name='language-list'),
    path('licenses/', LicenseListAPIView.as_view(), name='license-list'),
]
