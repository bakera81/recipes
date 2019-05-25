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
      <RecipeBlock title="Salty Pasta" />
      <RecipeBlock title="Spicy Pasta" />
    </Container>
    <div className="box">
      <img src="https://source.unsplash.com/random/128x128" />
    </div>
  </div>
)
