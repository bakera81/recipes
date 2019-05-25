import React from "react"

import 'bulma/css/bulma.css'

import Navbar from  "../components/navbar"
import Header from "../components/header"
import Container from "../components/container"
import RecipeBlock from "../components/recipeblock"

export default () => (
  <div>
    <Navbar />
    <Header class="name" headerText="Recipes"/>
    <Container>
      <RecipeBlock title="Salty Pasta" slug="https://www.google.com" />
      <RecipeBlock title="Spicy Pasta" />
      <RecipeBlock title="Simple Pasta" />
      <RecipeBlock title="Savory Pasta" />
      <RecipeBlock title="Scintillating Pasta" />
    </Container>
    <div className="box">
      <img src="https://source.unsplash.com/random/128x128" />
    </div>
  </div>
)
