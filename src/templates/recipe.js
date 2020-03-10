import React from "react"

import 'bulma/css/bulma.css'
import styled from "@emotion/styled"

import { graphql } from "gatsby"
import Layout from  "../components/layout"
import PageTitle from "../components/pagetitle"
import RecipeList from "../components/recipelist"


const H3 = styled.h3`
  text-align: center;
`

export default ({ data }) => (
  <Layout>
    <PageTitle title={data.recipesYaml.title.toUpperCase()} />
    <div class="columns">
      <div class="column">
        <H3 className="title is-3">Ingredients</H3>
        <RecipeList list={data.recipesYaml.ingredients} />
      </div>
      <div class="column">
        <H3 className="title is-3">Instructions</H3>
        <RecipeList list={data.recipesYaml.instructions} />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
     recipesYaml(slug: {eq: $slug}) {
       title
       slug
       ingredients {
         text
         protip
       }
       instructions {
         text
         protip
       }
     }
  }
`
