from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = ("Category")
        verbose_name_plural = ("Categories")

    def __str__(self):
        return self.name

class TimeOfDay(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Overlay(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name
class Height(models.Model):
    value = models.CharField(max_length=200)
    def __str__(self):
        return self.value
    
class Discount(models.Model):
    title = models.CharField(max_length=100)
    details = models.TextField()
    category = models.ForeignKey("Category", on_delete=models.CASCADE)
    time = models.ForeignKey("TimeOfDay", on_delete=models.CASCADE)
    cafe = models.CharField(max_length=100)
    image = models.ImageField(upload_to='discounts_images')
    location = models.CharField(max_length=2500)
    overlay = models.ForeignKey("Overlay", on_delete=models.CASCADE)
    height = models.ForeignKey("Height", on_delete=models.CASCADE)
    class Meta:
        verbose_name = ("Discount")
        verbose_name_plural = ("Discounts")
    def __str__(self):
        return self.title
