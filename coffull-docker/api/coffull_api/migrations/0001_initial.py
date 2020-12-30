# Generated by Django 2.2.17 on 2020-12-29 07:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Coffee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('feature', models.CharField(max_length=250)),
                ('taste', models.CharField(max_length=250)),
                ('impressions', models.CharField(max_length=500)),
            ],
        ),
    ]