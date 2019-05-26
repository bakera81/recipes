import React from "react"

import 'bulma/css/bulma.css'

import Layout from  "../components/layout"
import PageTitle from "../components/pagetitle"
import Container from "../components/container"
import RecipeBlock from "../components/recipeblock"

export default ({ data }) => (
  <Layout>
    <PageTitle title="Recipes"/>
    <Container>
      {data.allDataYaml.edges.map(({ node }) => (
        <RecipeBlock title={node.title} slug={node.fields.slug} />
      ))}
    </Container>
    <div className="box">
      <img src="https://source.unsplash.com/random/128x128" />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allDataYaml {
      edges {
        node {
          title
          fields {
            slug
          }
        }
      }
    }
  }
`
