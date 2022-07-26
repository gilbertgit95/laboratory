from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse

import math
import json

from . import models

# Create your views here.

def home(request):

    products = models.Product.objects.all()
    products = list(products)
    ls_group_size = 4

    # add item for add product
    products.insert(0, {
        'product_image': 'https://cdn2.iconfinder.com/data/icons/ecommerce-solid-version/32/add_product_new_product_item_ecommerceproduct--512.png',
        'product_name': 'Add Product',
        'highlighted': True
    })

    ls_group = math.ceil(len(products) / ls_group_size)
    ls_count = 0
    ls_result = []

    while ls_count < ls_group:
        start = ls_count * ls_group_size
        end = start + ls_group_size

        ls_result.append(products[start:end])
        ls_count = ls_count + 1

    return render(request, 'products/products_list.html', {'products': ls_result})

@csrf_exempt
def product_form(request):
    product_id = request.GET.get('id', '')
    template_data = {
        'is_new': True,
        'product': {}
    }

    try:
        # product id means edit form
        if len(product_id):
            template_data['is_new'] = False
            template_data['product'] = models.Product.objects.get(id=product_id)

        # empty product id means new product
        else:
            template_data['is_new'] = True

    # if error occurs during proccess redirect to home
    except:
        return redirect('/')

    return render(request, 'products/product_form.html', template_data)

@csrf_exempt
def product(request):
    product_id = request.GET.get('id', '')
    try:
        # use to display the product page
        if (request.method == 'GET'):
            product = models.Product.objects.get(id=product_id)

            return render(request, 'products/product.html', {'product': product})

        # use to add new product
        elif (request.method == 'POST'):
            data = json.loads(request.body)
            # transac = models.Product(
            #     product_name=data['product_name'],
            #     product_desc=data['product_desc'],
            #     product_image=data['product_image'],
            #     product_brand=data['product_brand'],
            #     product_price=data['product_price'],
            #     product_status=data['product_status']
            # )

            # transac.save()

            return JsonResponse({
                'type': 'POST',
                'id': product_id,
                'data': data['product_name']
            })

        # use to edit a particular product
        elif (request.method == 'PATCH'):
            data = json.loads(request.body)
            # transac = models.Product.objects.get(id=int(product_id))
            # transac.update(
            #     product_name= data['product_name'],
            #     product_desc= data['product_desc'],
            #     product_image= data['product_image'],
            #     product_brand= data['product_brand'],
            #     product_price= data['product_price'],
            #     product_status= data['product_status']
            # )
            # transac.save()

            return JsonResponse({
                'type': 'PATCH',
                'id': product_id,
                'data': data
            })

        # use to delete a product
        elif (request.method == 'DELETE'):
            return JsonResponse({
                'type': 'DELETE',
                'id': product_id
            })

        # redirect if method not 
        else:
            return redirect('/')

    # redirect if an error occur
    except:
        return redirect('/')


def polls(request):
    return HttpResponse("Hello, world. You're at the polls index.")
