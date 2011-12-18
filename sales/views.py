# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

def render(request, template, context):
    return render_to_response(template, context,\
                context_instance=RequestContext(request))

def home(request):
    return render(request, 'base.html', {})


    
