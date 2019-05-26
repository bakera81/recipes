import React from "react"

import 'bulma/css/bulma.css'

import Layout from  "../components/layout"
import PageTitle from "../components/pagetitle"
import Container from "../components/container"
import RecipeBlock from "../components/recipeblock"

export default () => (
  <Layout>
    <PageTitle title="Recipes"/>
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
  </Layout>
)
