from django.db import models # type: ignore

class Workout(models.Model):
    title = models.CharField(max_length=100)
    duration = models.IntegerField()  # in minutes
    calories_burned = models.IntegerField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
