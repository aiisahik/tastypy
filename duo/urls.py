from django.conf.urls.defaults import patterns, url, include
from tastypie.api import Api
from api import *
from .views import *

v1 = Api(api_name='v1')
v1.register(ProfileResource())
# v1.register(EntryResource())

urlpatterns = patterns('',
    url(r'^duo/signup/',
        Signup.as_view(),
        name='signup'),

    # url(r'^(?P<pk>\d+)/$',
    #     DetailView.as_view(),
    #     name="detail"),

    # url(r'^api/', include(v1.urls)),
    url(r'^duo/api/', include(v1.urls)),
)