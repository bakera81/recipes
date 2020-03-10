import React from "react"

import styled from "@emotion/styled"
import 'bulma/css/bulma.css'

import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"

const PageTitle = styled.h1`
  font-family: Chomsky;
  font-smooth: never;
  -webkit-font-smoothing : none;
  font-weight: normal;
  text-align: right;
`

const PTContainer = styled.div`

`

export default props => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: {eq: "400px-Tiziano_-_Amor_Sacro_y_Amor_Profano_(Galería_Borghese,_Roma,_1514).jpg"}) {
          childImageSharp {
            fixed(height: 48) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column has-text-right">
            <Img fixed={data.file.childImageSharp.fixed} />
          </div>
          <div classname="column">
            <PageTitle className="is-size-1">{props.children}</PageTitle>
          </div>
        </div>
      </div>
    </section>
  )
}
