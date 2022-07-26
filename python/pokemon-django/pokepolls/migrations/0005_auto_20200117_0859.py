# Generated by Django 3.0 on 2020-01-17 00:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pokepolls', '0004_auto_20200115_0608'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pokestats',
            name='attack',
        ),
        migrations.RemoveField(
            model_name='pokestats',
            name='defence',
        ),
        migrations.RemoveField(
            model_name='pokestats',
            name='hp',
        ),
        migrations.RemoveField(
            model_name='pokestats',
            name='special_attack',
        ),
        migrations.RemoveField(
            model_name='pokestats',
            name='special_defence',
        ),
        migrations.RemoveField(
            model_name='pokestats',
            name='speed',
        ),
        migrations.RemoveField(
            model_name='pokestats',
            name='stat_type',
        ),
        migrations.AddField(
            model_name='pokestats',
            name='baseStat',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='pokestats',
            name='effort',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='pokestats',
            name='name',
            field=models.CharField(default='', max_length=20),
        ),
    ]
