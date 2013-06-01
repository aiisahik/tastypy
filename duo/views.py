# Create your views here.
from django.views.generic.base import TemplateView
from django.http import Http404
from tastypie.api import Api
from api import *

# from api import v1
from .models import *

class IndexView(TemplateView):
	template_name = 'index.html'

class Signup(TemplateView):
	template_name = 'duo/basic.html'
