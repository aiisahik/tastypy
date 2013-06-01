from tastypie import fields
from tastypie.resources import ModelResource
from django.contrib.auth.models import User
from duo.models import *

class ProfileResource(ModelResource):
    class Meta:
        queryset = Profile.objects.all()
        resource_name = 'profile'