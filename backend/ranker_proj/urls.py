"""
URL configuration for ranker_proj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('coldwar/', include('coldwar.urls')),
    path('modernwarfare/', include('modernwarfare.urls')),
    path('modernwarfare2/', include('modernwarfare2.urls')),
    path('vanguard/', include('vanguard.urls')),
    path('warzone/', include('warzone.urls')),
    path('warzone2/', include('warzone2.urls')),
    path('user/', include('user.urls')),
    # Include other app URLs here
]
