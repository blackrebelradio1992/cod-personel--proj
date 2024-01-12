from django.urls import path
from .views import modern_warfare2_profile, ModernWarfareData2ViewSet

urlpatterns = [
    path('modern-warfare2-profile/', modern_warfare2_profile, name='modern_warfare2_profile'),
    path('mw2-data', ModernWarfareData2ViewSet.as_view({
        'get': 'list',  # Assuming you want to list items for GET requests
        # Add other actions like 'post': 'create' if needed
    }), name='mw2_data'),
    # Add other URL patterns as needed
]