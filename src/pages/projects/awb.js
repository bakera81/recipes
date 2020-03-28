import React from "react"

import Layout from "../../components/layout"
import Project from "../../components/project"
import P from "../../components/paragraph"

import projectImage from "../../images/projects/pencil-code-tree.png"

export const frontmatter = {
  title: `anthonywbaker.com`,
  description: `This website.`,
  preview: `projects/awb-2020.jpg`,
  themeColor: `#828cb8`,
}

export default () => (
  <Layout>
    <Project imgRight title={frontmatter.title} imgSrc={projectImage}>
      <P>Built this site with <a href="">Gatsby</a>, <a href="">Emotion</a>, and <a href="">Bulma</a>.</P>
      <P>I decided to deliberately make this site feel a bit offputting: The fonts are unpleasant to read and mismatched (Microsoft Sans Serif circa Windows 98 and a New York Times knockoff), text is right aligned, black font and whitespace is juxtaposed with bursts of color from classic Renaissance art.</P>
    </Project>
  </Layout>
)
