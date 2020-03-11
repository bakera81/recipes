import React from "react"

import 'bulma/css/bulma.css'
import { css } from "@emotion/core"

import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import PageTitle from "../components/pagetitle"
import RecipeBlock from "../components/recipeblock"

import sluggify from "../helpers/sluggify"

export default ({ data }) => (
  <Layout>
    <PageTitle>Projects</PageTitle>
    {/*TODO: use Bulma level for this*/}
    <Img fixed={data.file.childImageSharp.fixed} />
    <section className="section">
      {data.allJavascriptFrontmatter.edges.map(({ node }) => (
        <RecipeBlock title={node.frontmatter.title} slug={`projects/${sluggify(node.fileAbsolutePath)}`} />
      ))}
    </section>
  </Layout>
)

export const query = graphql`
query {
  # Get an image because Gatsby image is obscenely convoluted
  file(relativePath: {eq: "400px-Tiziano_-_Amor_Sacro_y_Amor_Profano_(Galería_Borghese,_Roma,_1514).jpg"}) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
  # Get all projects
  allJavascriptFrontmatter {
    edges {
      node {
        fileAbsolutePath
        frontmatter {
          description
          error
          title
        }
      }
    }
  }
}
`
