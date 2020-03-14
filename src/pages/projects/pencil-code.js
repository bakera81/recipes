import React from "react"

import Layout from "../../components/layout"
import Project from "../../components/project"

import projectImage from "../../images/projects/pencil-code-tree.png"

export const frontmatter = {
  title: `Pencil Code for Educators`,
  description: `Prototyped an online resource for educators using Pencil Code.`,
  // preview: `path/to/image.jpg`,
  preview: projectImage,
}

export default () => (
  <Layout>
    <Project imgRight title={frontmatter.title} imgSrc={projectImage}>
      <p>Pencil Code is a block-based programming language designed to teach computer science and algortihmic thinking. Working with Google, I led a small team that built a prototype of a website for educators to share resources and gain inspiration to teach using Pencil Code. I conducted UX research to guide the site through several iterations.</p>
    </Project>
  </Layout>
)
