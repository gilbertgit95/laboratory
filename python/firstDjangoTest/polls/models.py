from django.db import models

# Create your models here
class Product(models.Model):
    product_name = models.CharField(max_length=50)
    product_desc = models.CharField(max_length=500)
    product_brand = models.CharField(max_length=20)
    product_price = models.FloatField()
    product_status = models.CharField(max_length=10)
    product_image = models.CharField(max_length=500)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product_name

    class Meta:
        verbose_name_plural = 'Products'
