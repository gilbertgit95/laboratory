from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Pokemon

class PokemonAdmin(UserAdmin):
    model = Pokemon
    list_display = ('poke_id', 'name', 'created', 'image')
    search_fields = ('name',)
    readonly_fields = ('poke_id', 'created')

    ordering = ()
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

# Register your models here.
admin.site.site_header = "Pokedex Admin"
admin.site.site_title = "Pokedex Portal"
admin.site.index_title = "Welcome to Pokedex Portal"

admin.site.register(Pokemon, PokemonAdmin)
