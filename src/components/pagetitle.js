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
         allFile(filter: {relativePath: {regex: "/renaissance/"}}) {
           edges {
             node {
               relativePath
               childImageSharp {
                 fixed(height: 48) {
                   ...GatsbyImageSharpFixed
                 }
               }
             }
           }
         }
       }
     `
    /* graphql`
      query {
        file(relativePath: {eq: "renaissance/400px-Tiziano_-_Amor_Sacro_y_Amor_Profano_(Galería_Borghese,_Roma,_1514).jpg"}) {
          childImageSharp {
            fixed(height: 48) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
    */
  )

  const randomImg =  data.allFile.edges[Math.floor(Math.random() * data.allFile.edges.length)]

  return (
    <section className="section">
      <div className="container">
        <div className="level">
        {/*TODO: Get Dan's help*/}
          <div className="level-right has-text-right" css={{marginLeft: `auto;`, marginRight: `15px;`}}>
            <Img fixed={randomImg.node.childImageSharp.fixed} />
          </div>
          <div className="level-right">
            <PageTitle className="is-size-1">{props.children}</PageTitle>
          </div>
        </div>
      </div>
    </section>
  )
}
