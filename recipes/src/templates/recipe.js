import React from "react"

import 'bulma/css/bulma.css'

import { useStaticQuery, graphql } from "gatsby"
import Layout from  "../components/layout"
import PageTitle from "../components/pagetitle"



export default ({ data }) => (
  <Layout>
    <PageTitle title={data.dataYaml.title}/>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
     dataYaml(fields: {slug: {eq: $slug}}) {
       title
       fields {
         slug
       }
     }
  }
`
