from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class CustomerDetails(models.Model):
    user = models.OneToOneField(User)
    first_name = models.CharField(max_length=200, null=True, blank=True)
    last_name = models.CharField(max_length=200, null=True, blank=True)
    address1 = models.CharField(max_length=200, null=True, blank=True)
    address2 = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    state = models.CharField(max_length=100, null=True, blank=True)
    zipcode = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    last_four_digits = models.CharField(max_length=10, null=True, blank=True)
    stripe_response = models.CharField(max_length=20, null=True, blank=True)
    
    
