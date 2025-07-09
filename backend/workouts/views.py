from django.shortcuts import render # type: ignore

# Create your views here.


from rest_framework import viewsets # type: ignore
from .models import Workout
from .serializers import WorkoutSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all().order_by('-date')
    serializer_class = WorkoutSerializer
