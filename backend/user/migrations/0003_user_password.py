# Generated by Django 4.2.7 on 2023-12-22 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_remove_user_password_remove_user_user_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]