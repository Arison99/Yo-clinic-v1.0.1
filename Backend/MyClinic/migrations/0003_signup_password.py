# Generated by Django 5.1.2 on 2024-12-19 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyClinic', '0002_login_signup'),
    ]

    operations = [
        migrations.AddField(
            model_name='signup',
            name='password',
            field=models.CharField(default='default_password', max_length=128),
            preserve_default=False,
        ),
    ]
