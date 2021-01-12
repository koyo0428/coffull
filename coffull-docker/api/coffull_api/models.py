import uuid
from django.db import models

class CoffeeNote(models.Model):
    noteId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, db_column='note_id')
    name = models.CharField(max_length=100, db_column='name')
    feature = models.CharField(max_length=250, null=True, db_column='feature')
    taste = models.CharField(max_length=250, null=True, db_column='taste')
    impression = models.CharField(max_length=500, null=True, db_column='impression')

    class Meta:
        db_table = 't_coffee_note'

    def __str__(self):
        return self.name