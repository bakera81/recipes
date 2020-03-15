import React from "react"

import 'bulma/css/bulma.css'
import { css } from "@emotion/core"

import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import PageTitle from "../components/pagetitle"
import ProjectPreview from "../components/projectpreview"

import sluggify from "../helpers/sluggify"

// import testImage from "../images/projects/disco.png"

export default ({ data }) => {
  // This feels weird. Where should this live, given it needs `data` and `imagePath`?
  const findPreviewImage = imagePath => {
    const node = data.allFile.edges.find(n => {
        return n.node.relativePath.includes(imagePath);
      })
    // If this is erroring out, there is a missing frontmatter.preview!
    return node.node
    }

  return (
    <Layout>
      <PageTitle>Projects</PageTitle>
      {/*TODO: use Bulma level for this*/}
      <section className="section">
        {data.allJavascriptFrontmatter.edges.map(({ node }, i) => (
          <ProjectPreview
            alignRight={i % 2 == 0}
            description={node.frontmatter.description}
            slug={`projects/${sluggify(node.fileAbsolutePath)}`}
            imgSrc={findPreviewImage(node.frontmatter.preview)}
          />
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
query {
  # Get all relevant images. Filter them down later
  allFile(filter: {
            relativePath: {regex: "/projects/"},
            childImageSharp: {internal: {type: {eq: "ImageSharp"}}}}) {
    edges {
      node {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          internal {
            type
          }
        }
        relativePath
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
