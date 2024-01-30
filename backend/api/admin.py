from django.contrib import admin

from .models import  Language, License, Topic

admin.site.register(Topic)
admin.site.register(Language)
admin.site.register(License)