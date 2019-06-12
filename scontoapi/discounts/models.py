from django.db import models

# Create your models here.
class Discount(models.Model):
    title = models.TextField("")

    class Meta:
        verbose_name = ("Discount")
        verbose_name_plural = ("Discounts")

    def __str__(self):
        return self.title
