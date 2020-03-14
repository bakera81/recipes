import React from "react"

import 'bulma/css/bulma.css'
import { css } from "@emotion/core"

import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import PageTitle from "../components/pagetitle"
import ProjectPreview from "../components/projectpreview"

import sluggify from "../helpers/sluggify"

export default ({ data }) => (
  <Layout>
    <PageTitle>Projects</PageTitle>
    {/*TODO: use Bulma level for this*/}
    <Img fixed={data.file.childImageSharp.fixed} />
    <section className="section">
      {data.allJavascriptFrontmatter.edges.map(({ node }) => (
        /*
        <>
        <p>title: {node.frontmatter.title}</p>
        <p>description: {node.frontmatter.description}</p>
        <p>preview: {node.frontmatter.preview}</p>
        <p>path: {node.fileAbsolutePath}</p>
        </>
        import previewImage from node.frontmatter.preview
        */

        <ProjectPreview title={node.frontmatter.title} slug={`projects/${sluggify(node.fileAbsolutePath)}`} imgSrc={node.frontmatter.preview}>
          {node.frontmatter.description}
          {node.frontmatter.preview}
        </ProjectPreview>

      ))}
    </section>
  </Layout>
)

export const query = graphql`
query {
  # Get an image because Gatsby image is obscenely convoluted
  file(relativePath: {eq: "renaissance/ANGELICO,_Fra_Annunciation,_1437-46_(2236990916).jpg"}) {
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
          preview
        }
      }
    }
  }
}
`
