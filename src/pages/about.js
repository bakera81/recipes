import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import PageTitle from  "../components/pagetitle"
import P from "../components/paragraph"
import shuffle from "../helpers/shuffle"

const aboutMe = [
  "Designer.", "Communicator.", "Data scientist.", "Process enthusiast.", "Growth marketer.", "Product manager.", "Aspiring Renaissance man."
]

export default () => {
  return (
    <Layout>
      <PageTitle>About</PageTitle>
      {/*TODO: only shuffle on click*/}
      <P>{shuffle(aboutMe).map(item => (item + " "))} <span css={{fontSize: `.7em`}}>[<Link to="/about">shuffle</Link>]</span></P>
      <hr css={{width: `100px;`, marginLeft: `auto;`, marginRight: `0;`}}/>
      <P>Creative writing & computer science (bachelor's) @ <a href="https://www.lafayette.edu/">Lafayette College</a>: 2011-2015.</P>
      <P>Technology, innovation, and education (master's) @ <a href="https://www.gse.harvard.edu/masters/tie" >Harvard Graduate School of Education</a>: 2015-2016.</P>
      <P>Product, data science, and growth @ <a href="https://www.datacamp.com">DataCamp</a>: 2016-present.</P>
    </Layout>
  )
}
