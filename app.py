from flask import Flask
from flask import render_template, request
app = Flask(__name__)

@app.route('/')
def recipes():
    return render_template(
                'recipes/index.html.j2',
                title_addendum=' | Recipes',
                nav_items=True)

@app.route('/<recipe_slug>')
def render_recipe(recipe_slug):
    return render_template(
                'recipes/{0}.html.j2'.format(recipe_slug),
                title_addendum=' | Recipes',
                nav_items=True)
