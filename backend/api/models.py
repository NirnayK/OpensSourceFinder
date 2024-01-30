
from django.db import models
# from django.contrib.auth.models import User

class Topic(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Language(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class License(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

# class Project(models.Model):
#     name = models.CharField(max_length=200)
#     url = models.URLField()
#     avatar_url = models.URLField()
#     stars = models.IntegerField()
#     watchers = models.IntegerField()
#     forks = models.IntegerField()
#     language = models.CharField(max_length=100)
#     license = models.CharField(max_length=100)
#     topics = models.ManyToManyField(Topic)

#     def __str__(self):
#         return self.name


# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     bookmarked_projects = models.ManyToManyField(Project)

#     def __str__(self):
#         return self.user.username

#     def add_bookmarked_project(self, project):
#         self.bookmarked_projects.add(project)

#     def remove_bookmarked_project(self, project):
#         self.bookmarked_projects.remove(project)

#     def get_bookmarked_projects(self):
#         return self.bookmarked_projects.all()

#     def has_bookmarked_project(self, project):
#         return self.bookmarked_projects.filter(id=project.id).exists()
