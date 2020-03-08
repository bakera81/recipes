import React from "react"

import 'bulma/css/bulma.css'
import styled from "@emotion/styled"

import Layout from "../components/layout"
import PageTitle from  "../components/pagetitle"


const P = styled.p`
  font-family: "Microsoft Sans Serif";
  font-smooth: never;
  -webkit-font-smoothing : none;
  font-weight: normal;
  text-align: right;
`

export default () => (
  <Layout>
    <PageTitle>About</PageTitle>
    <P>Creative writing & computer science (bachelor's): 2011-2015.</P>
    <P>Technology, innovation, and education (master's): 2015-2016.</P>
    <P>Product, data science, and growth @ <a href="https://www.datacamp.com">DataCamp</a>: 2016-present.</P>
  </Layout>
)
