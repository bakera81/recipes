import React from "react"

import Layout from "../../components/layout"
import Project from "../../components/project"
import P from "../../components/paragraph"

import projectImage from "../../images/projects/2048.png"

export const frontmatter = {
  title: `Playing 2048 with Reinforcement Learning`,
  description: `Playing 2048 with reinforcement learning.`,
  preview: `projects/2048.png`,
  themeColor: `#edc53f`,
  backgroundColor: `#edc53f`,
  updatedAt: `2017-12-03`,
  completed: true,
}

export default () => (
  <Layout>
    <Project imgRight title={frontmatter.title} imgSrc={projectImage}>
      <P style={{textAlign: `left`}}>
        TODO
      </P>
      <P style={{textAlign: `left`}}>

      </P>
    </Project>
  </Layout>
)
