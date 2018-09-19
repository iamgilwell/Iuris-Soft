from django.contrib.auth.decorators import login_required
from django.shortcuts import render

# Create your views here.

@login_required
def iuris_admin(request):
   # testimonials = Testimonial.objects.all().order_by('created').filter(status="Publish")
    return render(request, 'iurisadmin.html')