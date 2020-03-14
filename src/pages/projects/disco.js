import React from "react"

import Layout from "../../components/layout"
import Project from "../../components/project"

import projectImage from "../../images/projects/disco.png"

export const frontmatter = {
  title: `Email Server and Ambient Display`,
  description: `Internet-connected disco ball that sends email`
}

export default () => (
  <Layout>
    <Project imgRight title={frontmatter.title} imgSrc={projectImage}>
      <p>I wrote scripts to automate an email account (send mail, read mail, and move messages to folders). Additional scripts scraped various websites for event information and stored it in a SQL database on a Raspberry Pi. Each week, users who have opted in receive a personalized email containing information about upcoming events from multiple sources based on categories they have selected. The Raspberry Pi was mounted on a customized disco ball so that database activity was reflected in the pattern of lights and motion of the disco ball. As an ambient display, the goal is to visualize digital information in a new way.</p>
    </Project>
  </Layout>
)