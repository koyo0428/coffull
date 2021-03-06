# Generated by Django 2.2.17 on 2021-01-12 04:50

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('coffull_api', '0004_auto_20210111_1425'),
    ]

    operations = [
        migrations.RenameField(
            model_name='coffeenote',
            old_name='note_id',
            new_name='noteId',
        ),
        migrations.RemoveField(
            model_name='coffeenote',
            name='impressions',
        ),
        migrations.AddField(
            model_name='coffeenote',
            name='impression',
            field=models.CharField(db_column='impression', default=1, max_length=500),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='coffeenote',
            name='feature',
            field=models.CharField(db_column='feature', max_length=250),
        ),
        migrations.AlterField(
            model_name='coffeenote',
            name='name',
            field=models.CharField(db_column='name', max_length=100),
        ),
        migrations.AlterField(
            model_name='coffeenote',
            name='noteId',
            field=models.UUIDField(db_column='note_id', default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='coffeenote',
            name='taste',
            field=models.CharField(db_column='taste', max_length=250),
        ),
        migrations.AlterModelTable(
            name='coffeenote',
            table='t_coffee_note',
        ),
    ]
