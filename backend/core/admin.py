from django.contrib import admin

from .models import  Language, License, Tag

admin.site.register(Tag)
admin.site.register(Language)
admin.site.register(License)