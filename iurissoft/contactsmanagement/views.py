from django.shortcuts import render

# Create your views here.

def contact_list(request):
    '''context = {
        "items": items,
        "page_range": page_range
    }'''

    template = "contactsmanagement/contacts_list.html"

    return render(request, template)