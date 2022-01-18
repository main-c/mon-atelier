from . import *
DEBUG = False



# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'monatelier',
        'USER': 'main_c',
        'PASSWORD': 'yannikkadjie',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}