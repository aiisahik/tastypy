from django.db import models
from django.core.urlresolvers import reverse
from djangotoolbox.fields import ListField, EmbeddedModelField


# Create your models here.
class Profile(models.Model):
    email = models.EmailField()
    gender = models.CharField(max_length=10)
    dob = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)

class Battle(models.Model):
	judge = models.ForeignKey(Profile, related_name = 'judge')
	winner = models.ForeignKey(Profile,  related_name = 'winner')
	loser = models.ForeignKey(Profile, related_name = 'loser')