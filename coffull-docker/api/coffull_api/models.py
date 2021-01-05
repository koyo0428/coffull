import uuid
from django.db import models

class Coffee(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    feature = models.CharField(max_length=250)
    taste = models.CharField(max_length=250)
    impressions = models.CharField(max_length=500)

    def __str__(self):
        return self.name