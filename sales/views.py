# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from sales.models import *
import stripe

#this is a secret key given to each user for test
api_key = settings.STRIPE_API_KEY


def render(request, template, context):
    return render_to_response(template, context,\
                context_instance=RequestContext(request))

def home(request):
    return render(request, 'base.html', {})

@csrf_exempt
def create(request):
    print request.POST['stripe_token']
    return HttpResponse("Success")
    # stripe.Customer.create(
#          description="Customer for "subbu@sugarsnap.com"",
#          card="tok_P0tbjKL4kUnQTs" # obtained with stripe.js
# )
    
    

    
