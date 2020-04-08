import React from "react"

import 'bulma/css/bulma.css'
import { css } from "@emotion/core"

import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
// Helpful hints when it's time to migate this repo:
//https://gist.github.com/trongthanh/2779392
const listLinkStyle = css`
  /* font-family: "Pixel Arial 11"; */
  font-family: Chomsky;
  font-smooth: never;
  -webkit-font-smoothing : none;
  font-weight: normal;
`
const ListLink = props => (
  <li>
    <Link to={ props.to }>
      <h1 className="title is-1" css={ listLinkStyle }>{ props.children }</h1>
    </Link>
  </li>
)

export default ({ children }) => (
  <Layout>
    <div>
      <ul>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/projects">Projects</ListLink>
        <ListLink to="/ideas">Ideas</ListLink>
        <ListLink to="/recipes">Recipes</ListLink>
        <ListLink to="/writing">Writing</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </div>
  </Layout>
)
