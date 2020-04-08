import React from "react"

import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import PageTitle from "../components/pagetitle"
import Idea from "../components/idea"
import P from "../components/paragraph"

import visit from "unist-util-visit"
import toString from "mdast-util-to-string"




export default ({ data }) => {

  // Walk through the hast and create a data structure to pass to a custom component
  /*
    Markdown format:

    # heading
    ### date
    Everthing else is content and will be rendered to HTML in a standard way.
  */
 var simplifiedMdContent = []
 let idea = {}
 visit(data.markdownRemark.htmlAst, node => {
   // If we encounter a header, push the idea obj then create a new obj
   if (node.tagName == "h1") {
     // Exception: the first header should not be pushed
     if (!(simplifiedMdContent.length == 0 && Object.keys(idea).length == 0)) {
       simplifiedMdContent.push(idea)
       idea = {}
     }
     idea.heading = toString(node)
   }

   // h2 must be the date
   if (node.tagName == "h3") {
     idea.date = toString(node)
   }

   // If we encounter a paragraph, add the node and its children to an array
   if (node.tagName == "p") {
     if ("content" in idea) {
       idea.content.push(node)
     } else {
       idea.content = [node]
     }
   }
 })
 // When finished traversing the tree, push the remaining obj
 simplifiedMdContent.push(idea)

 // console.log(simplifiedMdContent)
  return (
    <Layout>
      <PageTitle>Ideas</PageTitle>
      {/*Walk through each "idea" and send the heading and content to a subcomponent */}
      {simplifiedMdContent.map(idea => (
        <Idea heading={idea.heading} date={idea.date} paragraphs={idea.content} />
      ))}
    </Layout>
  )
}

export const query = graphql`
query {
  markdownRemark(fileAbsolutePath: {regex: "/ideas/"}) {
    id
    frontmatter {
      date
      title
    }
    headings {
      depth
      value
    }
    htmlAst
    rawMarkdownBody
  }
}
`
