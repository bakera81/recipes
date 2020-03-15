import React from "react"

import { css } from "@emotion/core"

import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from "./layout"
import PageTitle from "./pagetitle"


export default props => {
  const imgOrder = props.imgRight ? 1 : 0
  console.log(props.imgSrc)
  return (
    <>
      <PageTitle>{props.title}</PageTitle>
      <section className="section">
        <div css={{alignItems: `center;`}} className="columns">
          <div className="column" css={{order: `${imgOrder}`}}>
          {/*TODO: create a border around the image using a solid color*/}
            {/*<p>{JSON.stringify(props.imgSrc)}</p> */}
            <Img fixed={props.imgSrc.childImageSharp.fixed} />
            {/*<img css={{display: `block;`, margin: `0 auto;`}} src={props.imgSrc} /> */}
          </div>
          <div className="column">
            {props.children}
          </div>
        </div>
      </section>
    </>
  )
}
