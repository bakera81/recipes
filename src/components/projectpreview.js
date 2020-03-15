import React from "react"

import { css } from "@emotion/core"

import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import P from "./paragraph"


export default props => {
  console.log(props.alignRight)
  const containerClasses = props.alignRight == true ? `column is-half is-offset-half` : `column is-half`
  return (
    <>
      <section className="section">
        <div className="columns">
          <div className={containerClasses} css={{textAlign: `center;`}}>
          {/*TODO: create a border around the image using a solid color*/}
            {/*<p>{JSON.stringify(props.imgSrc)}</p> */}
            <Img fixed={props.imgSrc.childImageSharp.fixed} />
            <P>{props.description}</P>
          </div>
        </div>
      </section>
    </>
  )
}
