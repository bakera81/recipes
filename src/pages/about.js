import React from "react"

import 'bulma/css/bulma.css'

import Layout from "../components/layout"
import PageTitle from  "../components/pagetitle"
import P from "../components/paragraph"

const aboutMe = [
  "Designer.", "Communicator.", "Data scientist.", "Process enthusiast.", "Growth marketer.", "Product manager.",
]

export default () => (
  <Layout>
    <PageTitle>About</PageTitle>
    <P>{aboutMe.map(item => (item + " "))} [shuffle]</P>
    <hr css={{width: `100px;`, marginLeft: `auto;`, marginRight: `0;`}}/>
    <P>Creative writing & computer science (bachelor's): 2011-2015.</P>
    <P>Technology, innovation, and education (master's): 2015-2016.</P>
    <P>Product, data science, and growth @ <a href="https://www.datacamp.com">DataCamp</a>: 2016-present.</P>
  </Layout>
)
