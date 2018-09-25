from django.shortcuts import render, redirect

from . import forms

# Create your views here.

def contact_list(request):
    '''context = {
        "items": items,
        "page_range": page_range
    }'''

    template = "contactsmanagement/contacts_list.html"

    return render(request, template)
def create_contact(request):
    if request.method == 'POST':
        form=forms.ContactCreateForm(request.POST,request.FILES)
        if form.is_valid():
            instance=form.save(commit=False)
            instance.added_by=request.user
            instance.save()

            return redirect('contactsmanagement:contact_list')

    else:
        form=forms.ContactCreateForm

    return render(request,'contactsmanagement/create_contact.html',{'form':form})






