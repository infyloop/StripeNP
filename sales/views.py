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
    print request.POST
    import ipdb
    ipdb.set_trace()
    CustomerDetails.objects.create(
        user = request.user,
        first_name = request.POST['firstName'],
        last_name = request.POST['lastName'],
        address1 = request.POST['address1'],
        address2 = request.POST['address2'],
        city = request.POST['city'],
        state = request.POST['state'],
        zipcode = request.POST['zipCode'],
        country = request.POST['country'],
        last_four_digits = request.POST['lastFourDigits'],
        stripe_id = request.POST['stripeToken']
        )
    return HttpResponse("Success")
    # stripe.Customer.create(
#          description="Customer for "subbu@sugarsnap.com"",
#          card="tok_P0tbjKL4kUnQTs" # obtained with stripe.js
# )
    
    

    
