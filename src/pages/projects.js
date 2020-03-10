import React from "react"

import 'bulma/css/bulma.css'
import { css } from "@emotion/core"

import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import PageTitle from "../components/pagetitle"

export default ({ data }) => (
  <Layout>
    <PageTitle>Projects</PageTitle>
    <Img fixed={data.file.childImageSharp.fixed} />
  </Layout>
)

export const query = graphql`
query {
  file(relativePath: {eq: "400px-Tiziano_-_Amor_Sacro_y_Amor_Profano_(Galería_Borghese,_Roma,_1514).jpg"}) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`
