import React from "react"

import 'bulma/css/bulma.css'

import { graphql } from "gatsby"
import Layout from  "../components/layout"
import PageTitle from "../components/pagetitle"
import RecipeList from "../components/recipelist"



export default ({ data }) => (
  <Layout>
    <PageTitle title={data.dataYaml.title} />
    <RecipeList list={data.dataYaml.ingredients} />
    <RecipeList list={data.dataYaml.instructions} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
     dataYaml(fields: {slug: {eq: $slug}}) {
       title
       ingredients {
         text
         protip
       }
       instructions {
         text
         protip
       }
       fields {
         slug
       }
     }
  }
`
