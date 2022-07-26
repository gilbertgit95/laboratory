from django.test import TestCase
from ..models import Pokemon

class UserTestCase(TestCase):

    def setUp(self):

        self.pokes = Pokemon(
            poke_id= 1,
            evolution= '',
            name= 'test Pokemon',
            weight= 32,
            height= 69,
            image= 'https://www.tutorialspoint.com/electron/images/tray.jpg',
            held_items= 'item1,item2,item3',
            abilities= 'ability1,ability2,ability3',
            types= 'type1,type2,type3',
            stats= 'stat1:0:1,stat2:12:45'
        )
        self.pokes.save()

    def test_fetching_pokemon(self):
        all_pokes = Pokemon.objects.all()
        self.assertTrue(len(all_pokes) >= 1)