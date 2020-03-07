import React from "react"

import 'bulma/css/bulma.css'
import styled from "@emotion/styled"

import { graphql } from 'gatsby'
import Layout from "../components/layout"

const CategoryTitle = styled.h1`
  font-family: "Microsoft Sans Serif";
  color: red;
`

export default () => (
  <Layout>
    <ul>
      <li><CategoryTitle>About</CategoryTitle></li>
      <li>Projects</li>
      <li>Data</li>
      <li>Recipes</li>
      <li>Contact</li>
    </ul>
  </Layout>
)
