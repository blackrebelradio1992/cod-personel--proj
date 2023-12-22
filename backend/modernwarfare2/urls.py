from django.urls import path
from .views import modern_warfare2_profile

urlpatterns = [
    path('modern-warfare2-profile/', modern_warfare2_profile, name='modern_warfare2_profile'),
    path('mw2-data', )
    # Add other URL patterns as needed
]