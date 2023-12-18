from django import forms
from .models import User

class CodInfoForm(forms.ModelForm):
    class Meta:
        model = User
        Fields = ['user_name', 'cod_sso_token', 'cod_platform', 'cod_gamer_tag', 'cod_platform']