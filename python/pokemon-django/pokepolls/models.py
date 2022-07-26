from django.db import models

# Create your models here.

# pokemon info and skills
class Pokemon(models.Model):

    poke_id = models.PositiveIntegerField()
    name = models.CharField(max_length=50)
    height = models.FloatField()
    weight = models.FloatField()
    image = models.CharField(max_length=500)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Pokemon'

# all the items that can be held by a pokemon
class HeldItems(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'HeldItems'

# all the abilities that the pokemon can have
class Abilities(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Abilities'

# all the types of pokemon
class Types(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Types'


# the statistics of a pokemon
class PokeStats(models.Model):
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)
    baseStat = models.FloatField(default=0)
    effort = models.FloatField(default=0)
    name = models.CharField(max_length=20,default='')

    class Meta:
        verbose_name_plural = 'PokeStats'

# the evolution of a pokemon
class PokeEvolutions(models.Model):
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    order = models.PositiveIntegerField()

    class meta:
        verbose_name_plural = 'PokeEvolutions'

# abilities of a single pokemon is in here
class PokeAbilities(models.Model):
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)
    ability = models.ForeignKey(Abilities, on_delete=models.CASCADE)
    order = models.PositiveIntegerField()

    class meta:
        verbose_name_plural = 'PokeAbilities'

# held items of a single pokemon is in here
class PokeHeldItems(models.Model):
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)
    heldItem = models.ForeignKey(HeldItems, on_delete=models.CASCADE)
    order = models.PositiveIntegerField()
    
    class meta:
        verbose_name_plural = 'PokeHeldItems'

# types of a single pokemon is in here
class PokeTypes(models.Model):
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)
    type = models.ForeignKey(Types, on_delete=models.CASCADE)
    order = models.PositiveIntegerField()

    class meta:
        verbose_name_plural = 'PokeTypes'

