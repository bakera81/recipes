import sys, os
INTERP = "/home/antbak_recipes/recipes.anthonywbaker.com/recipes_env/bin/python"
#INTERP is present twice so that the new Python interpreter knows the actual executable path
if sys.executable != INTERP: os.execl(INTERP, INTERP, *sys.argv)
from app import app as application

# Helpful links to deploy:
# https://help.dreamhost.com/hc/en-us/articles/215769548-Passenger-and-Python-WSGI
