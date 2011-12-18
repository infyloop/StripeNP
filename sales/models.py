from django.db import models

# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    stripe_id = models.CharField(max_length=200, null=True, blank=True)
    
