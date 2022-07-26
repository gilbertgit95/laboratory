from django.core.management.base import BaseCommand, CommandError
import requests
import time
import re

from pokepolls.models import Pokemon
from pokepolls.models import Types
from pokepolls.models import HeldItems
from pokepolls.models import Abilities
from pokepolls.models import PokeTypes
from pokepolls.models import PokeHeldItems
from pokepolls.models import PokeAbilities
from pokepolls.models import PokeEvolutions
from pokepolls.models import PokeStats

BASE_API = 'https://pokeapi.co/api/v2' # from polls.models import Question as Poll
# https://pokeapi.co/api/v2/generation/1/

def cleanDatabase():
    #  delete all deependent data
    PokeTypes.objects.all().delete()
    PokeHeldItems.objects.all().delete()
    PokeAbilities.objects.all().delete()
    PokeEvolutions.objects.all().delete()
    PokeStats.objects.all().delete()

    # delete all independent data
    Types.objects.all().delete()
    HeldItems.objects.all().delete()
    Abilities.objects.all().delete()
    Pokemon.objects.all().delete()

def getEvolution(id):
    try:
        species = requests.get(f'{ BASE_API }/pokemon-species/{ id }/')
        species = species.json()
        evol = requests.get(species['evolution_chain']['url'])
        evol = evol.json()

        chain = []

        chainSpecies = evol['chain']

        while chainSpecies:
            chain.append(chainSpecies['species']['name'])
            if chainSpecies['evolves_to'] and len(chainSpecies['evolves_to']):
                chainSpecies = chainSpecies['evolves_to'][0]
            else:
                chainSpecies = None

        return chain
    except:
        return []

class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
       pass

    def handle(self, *args, **options):
        pokemons = []
        types_coll = set([])
        abilities_coll = set([])
        held_items_coll = set([])


        self.stdout.write('Note! this comand will takes minutes to complete due to pokeapi limitations.')
        time.sleep(2)

        # before the proccess started, database should be clean
        self.stdout.write('- Clean all Database')
        cleanDatabase()

        self.stdout.write('- Fetching Pokemons')
        # request all 1 generation pokemons
        try:
            pokeInfo = requests.get(f'{ BASE_API }/generation/1/')
            pokeInfo = pokeInfo.json()
            pokeInfo = pokeInfo['pokemon_species']

            # temporary for testing
            pokeInfo = pokeInfo[0:1]

            for poke in pokeInfo:
                # request information of a particular pokemon
                try:
                    # initiate variables
                    poke_id = int(re.split('\/', poke['url'])[-2])
                    evolution = '' #[]
                    name = ''
                    height = ''
                    weight = ''
                    image = ''
                    held_items = '' #[]
                    abilities = '' #[]
                    types = '' #[]
                    stats = '' #[]

                    pokemon = requests.get(f'{ BASE_API }/pokemon/{ poke_id }/')
                    pokemon = pokemon.json()

                    # extract only the information use in this app
                    # basic information
                    name = pokemon['name']
                    height = pokemon['height']
                    weight = pokemon['weight']
                    image = pokemon['sprites']['front_default']

                    # fetching the evolution data from poke api
                    evolution = getEvolution(poke_id)

                    # stringified list of information
                    evolution = evolution
                    held_items = []
                    abilities = []
                    types = []
                    for d in pokemon['held_items']:
                        held_items.append(d['item']['name'])
                    for d in pokemon['abilities']:
                        abilities.append(d['ability']['name'])
                    for d in pokemon['types']:
                        types.append(d['type']['name'])
                    stats = pokemon['stats']

                    # add data to the sets storage
                    for i in types:
                        types_coll.add(i)

                    for i in abilities:
                        abilities_coll.add(i)

                    for i in held_items:
                        held_items_coll.add(i)

                    pokemons.append({
                        'poke_id':    poke_id,
                        'evolution':  evolution,
                        'name':       name,
                        'height':     height,
                        'weight':     weight,
                        'image':      image,
                        'held_items': held_items,
                        'abilities':  abilities,
                        'types':      types,
                        'stats':      stats
                    })
                    time.sleep(0.5)

                except:
                    pass

            self.stdout.write('  +-> Done')

        except:
            self.stderr.write('  +-> Error fetching the pokemons!')

        # convert set into list
        types_coll =      list(types_coll)
        abilities_coll =  list(abilities_coll)
        held_items_coll = list(held_items_coll)

        # save the pokemons to the model
        if pokemons and len(pokemons):
            self.stdout.write('- Saving all the pokemons and other related data')
            poke_objs = []

            # for other info
            types_map = {}
            abilities_map = {}
            held_items_map = {}

            for info in types_coll:
                types_map[info] = Types(
                    name=info
                )
                types_map[info].save()
            
            for info in abilities_coll:
                abilities_map[info] = Abilities(
                    name=info
                )
                abilities_map[info].save()

            for info in held_items_coll:
                held_items_map[info] = HeldItems(
                    name=info
                )
                held_items_map[info].save()

            # for pokemons
            for poke in pokemons:
                pokemon_data = Pokemon(
                    poke_id=    poke['poke_id'],
                    name=       poke['name'],
                    height=     poke['height'],
                    weight=     poke['weight'],
                    image=      poke['image']
                )
                # evolution=  poke['evolution'],
                # held_items= poke['held_items'],
                # abilities=  poke['abilities'],
                # types=      poke['types'],
                # stats=      poke['stats']
                pokemon_data.save()

                 # save the dependent data
                held_items_data = []
                abilities_data = []
                types_data = []
                evolutions_data = []
                stats_data = []

                for info in range(len(poke['held_items'])):
                    held_items_data.append(PokeHeldItems(
                        pokemon=pokemon_data,
                        heldItem=held_items_map[poke['held_items'][info]],
                        order=info
                    ))

                for info in range(len(poke['abilities'])):
                    abilities_data.append(PokeAbilities(
                        pokemon=pokemon_data,
                        ability=abilities_map[poke['abilities'][info]],
                        order=info
                    ))

                for info in range(len(poke['types'])):
                    types_data.append(PokeTypes(
                        pokemon=pokemon_data,
                        type=types_map[poke['types'][info]],
                        order=info
                    ))

                for info in range(len(poke['evolution'])):
                    evolutions_data.append(PokeEvolutions(
                        pokemon=pokemon_data,
                        name=poke['evolution'][info],
                        order=info
                    ))

                for info in range(len(poke['stats'])):
                    stats_data.append(PokeStats(
                        pokemon=pokemon_data,
                        name=poke['stats'][info]['stat']['name'],
                        baseStat=poke['stats'][info]['base_stat'],
                        effort=poke['stats'][info]['effort']
                    ))

                PokeHeldItems.objects.bulk_create(held_items_data)
                PokeAbilities.objects.bulk_create(abilities_data)
                PokeTypes.objects.bulk_create(types_data)
                PokeEvolutions.objects.bulk_create(evolutions_data)
                PokeStats.objects.bulk_create(stats_data)


            self.stdout.write('  +-> Done')

        else:
            self.stderr.write('No Pokemon to be save!')

        self.stdout.write('End of the Process...')