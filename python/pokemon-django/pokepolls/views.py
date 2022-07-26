from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.core import serializers
from django.views import View
from .models import Pokemon
import re
import csv
import json

def get_name_from_url(path):
    p = re.compile(matching_slug_regex)
    return p.search(path).group('name')

class PokemonView(View):
    def get(self, request):
        pokemons = Pokemon.objects.all()
        pokemons = list(pokemons)
        return render(request, 'home.html', {'pokemons': pokemons})

class DetailView(View):
    def get(self, request, name):
        poke = serializers.serialize('json', Pokemon.objects.filter(name=name))
        poke = json.loads(poke)[0]
        poke = poke['fields']

        poke['abilities'] = poke['abilities'].replace(',', ', ')
        poke['held_items'] = poke['held_items'].replace(',', ', ')
        poke['types'] = poke['types'].replace(',', ', ')

        poke['stats'] = poke['stats'].split(',')
        poke['stats'] = [item.split(':') for item in poke['stats']]

        # add details for evolution
        poke['evolution_details'] = []
        evolPokes = poke['evolution'].split(',')
        for evolPoke in evolPokes:
            try:
                pokeData = serializers.serialize('json', Pokemon.objects.filter(name=evolPoke))
                pokeData = json.loads(pokeData)[0]
                pokeData = pokeData['fields']
                is_owner = False
                print(f"{ poke['name'] } == { pokeData['name'] }")
                if poke['name'] == pokeData['name']:
                    is_owner = True

                poke['evolution_details'].append({'name': evolPoke, 'detail': pokeData, 'is_owner': is_owner})
            except:
                poke['evolution_details'].append({'name': evolPoke, 'detail': None})

        return render(request, 'pokemon.html', {'pokemon': poke})

class AddView(View):
    def get(self, request):
        poke = {}
        poke['name'] = 'Enter name here'
        poke['weight'] = 0
        poke['height'] = 0
        poke['image'] = ''
        poke['evolution'] = []
        poke['abilities'] = []
        poke['held_items'] = []
        poke['types'] = []

        poke['stats'] = [
            ['speed', 0, 0],
            ['special-defence', 0, 0],
            ['special-attack', 0, 0],
            ['defence', 0, 0],
            ['attack', 0, 0],
            ['hp', 0, 0]
        ]

        back_path = '/'
        action = '/add-pokemon' # or modify

        return render(request, 'poke-form.html', {'pokemon': poke, 'back_path': back_path, 'action': action })


    def post(self, request):
        try:
            name = request.POST.get('name')
            weight = request.POST.get('weight')
            height = request.POST.get('height')
            pokeid = request.POST.get('pokeid')
            evolution = request.POST.get('evolution')
            abilities = request.POST.get('abilities')
            items = request.POST.get('items')
            types = request.POST.get('types')
            stats = request.POST.get('stats')
            image = request.POST.get('image')

            poke = Pokemon(
                poke_id=pokeid,
                evolution=evolution,
                name=name,
                weight=weight,
                height=height,
                image=image,
                held_items=items,
                abilities=abilities,
                types=types,
                stats=stats
            )
            poke.save()

        except:
            print('Error saving the product')

        return redirect('/')

class EditView(View):
    def get(self, request, name):
        poke = serializers.serialize('json', Pokemon.objects.filter(name=name))
        poke = json.loads(poke)[0]
        poke = poke['fields']

        poke['evolution'] = poke['evolution'].split(',')
        poke['abilities'] = poke['abilities'].split(',')
        poke['held_items'] = poke['held_items'].split(',')
        poke['types'] = poke['types'].split(',')

        poke['stats'] = poke['stats'].split(',')
        poke['stats'] = [item.split(':') for item in poke['stats']]

        back_path = f'/pokemons/{ name }/'
        action = f'/pokemons/{ name }/edit'

        return render(request, 'poke-form.html', {'pokemon': poke, 'back_path': back_path, 'action': action })


    def post(self, request, name):
        try:
            nameForm = request.POST.get('name')
            weight = request.POST.get('weight')
            height = request.POST.get('height')
            pokeid = request.POST.get('pokeid')
            evolution = request.POST.get('evolution')
            abilities = request.POST.get('abilities')
            items = request.POST.get('items')
            types = request.POST.get('types')
            stats = request.POST.get('stats')
            image = request.POST.get('image')

            Pokemon.objects.filter(name=name).update(
                # poke_id=pokeid,
                name=nameForm,
                weight=weight,
                height=height,
                image=image,
                held_items=items,
                evolution=evolution,
                abilities=abilities,
                types=types,
                stats=stats
            )

        except:
            console.log('Error saving the product')
        

        return redirect('/')

    def delete(self, request, name):
        try:
            Pokemon.objects.filter(name=name).delete()
        except:
            pass

        return HttpResponse(f'{ name } successfully deleted')

class Download(View):
    def get(self, request):
        # pokemons = serializers.serialize('json', Pokemon.objects.all())
        # pokemons = json.loads(pokemons)

        fields = request.GET.get('fields')
        fields = fields.split('-')

        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="pokemons.csv"'

        writer = csv.writer(response)
        
        orderfields = [
            'name',
            'created',
            'poke_id',
            'height',
            'weight',
            'image',
            'abilities',
            'held_items',
            'evolution',
            'types',
            'stats'
        ]
        orderfieldsMap = {
            'name': 'Name',
            'created': 'Date Created',
            'poke_id': 'Pokemon ID',
            'height': 'Height',
            'weight' : 'Weight',
            'image': 'Image URL',
            'abilities': 'Abilities',
            'held_items': 'Held Items',
            'evolution': 'Evolution',
            'types': 'Types',
            'stats': 'Statistics'
        }

        pokemons = Pokemon.objects.all().values(
            'name',
            'created',
            'poke_id',
            'height',
            'weight',
            'image',
            'abilities',
            'held_items',
            'evolution',
            'types',
            'stats'
        )

        #writing header
        row = []

        for col in orderfields:
            if col in fields:
                row.append(orderfieldsMap[col])

        writer.writerow(row)

        # writing contents
        for poke in pokemons:
            row = []

            for col in orderfields:
                if col in fields:
                    row.append(poke[col])

            writer.writerow(row)

        return response