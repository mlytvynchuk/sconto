# Generated by Django 2.2.2 on 2019-06-12 13:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Height',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Overlay',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='TimeOfDay',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Discount',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('details', models.TextField()),
                ('cafe', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='discounts_images')),
                ('location', models.CharField(max_length=2500)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='discounts.Category')),
                ('height', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='discounts.Height')),
                ('overlay', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='discounts.Overlay')),
                ('time', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='discounts.TimeOfDay')),
            ],
            options={
                'verbose_name': 'Discount',
                'verbose_name_plural': 'Discounts',
            },
        ),
    ]
