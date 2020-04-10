import React from "react"
import styled from "@emotion/styled"

import hastToHyperscript from "hast-to-hyperscript";




const renderHastToReact = node => {
    return hastToHyperscript(React.createElement, node);
}

const MdContainer = styled.div`
  p {
    font-family: "Microsoft Sans Serif";
    font-smooth: never;
    -webkit-font-smoothing: none;
    font-weight: normal;
    padding-top: 1em;
    padding-bottom: 1em;
  }
`

const Heading = styled.h4`
  margin-bottom: 0 !important;
  font-family: "Microsoft Sans Serif";
  font-smooth: never;
  -webkit-font-smoothing: none;
`

export default props => (
  <section className="section" css={{padding: `3rem 8rem`}}>
    <Heading className="title is-4">{props.heading}</Heading>
    {/* For each paragraph, render a P and it's children */}
    <MdContainer>
      {props.paragraphs.map(paragraph => (
        renderHastToReact(paragraph)
      ))}
    </MdContainer>
  </section>
)
