import React from "react"

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
      {/*


      */}
      <section className="section" css={{paddingLeft: `0`, paddingRight: `0`}}>
      <div className="columns is-multiline">
        {data.allJavascriptFrontmatter.edges.map(({ node }, i) => (
          <ProjectPreview
            alignRight={i % 2 == 0}
            description={node.frontmatter.description}
            slug={`projects/${sluggify(node.fileAbsolutePath)}`}
            imgSrc={findPreviewImage(node.frontmatter.preview)}
            themeColor={node.frontmatter.themeColor}
          />
        ))}
        </div>
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
          fixed(width: 100, height: 100) {
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
  allJavascriptFrontmatter(sort: {order: DESC, fields: frontmatter___updatedAt}) {
    edges {
      node {
        fileAbsolutePath
        frontmatter {
          description
          error
          title
          preview
          themeColor
        }
      }
    }
  }
}
`
