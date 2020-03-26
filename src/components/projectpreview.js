import React from "react"

import { css } from "@emotion/core"

import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import P from "./paragraph"


export default props => {
  const containerClasses = props.alignRight == true ? `column is-half is-offset-half` : `column is-half`
  return (
    <div className="column is-4" css={{textAlign: `center`}}>
      <Link to={props.slug}><Img fixed={props.imgSrc.childImageSharp.fixed} imgStyle={{border: `100px solid ${props.themeColor}`}}/></Link>
      {/*<P>{props.description}</P>
        flexDirection: `column`, flexWrap: `wrap`
        is-narrow
      */}
    </div>
  )
}
