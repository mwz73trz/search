from rest_framework import viewsets, filters
from .serializers import TeamSerializer
from .models import Team

class TeamViewSet(viewsets.ModelViewSet):
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
