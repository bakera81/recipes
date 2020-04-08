import React from "react"
import styled from "@emotion/styled"

import hastToHyperscript from "hast-to-hyperscript";




const renderHastToReact = node => {
    return hastToHyperscript(React.createElement, node);
}

const MdContainer = styled.div`
  p {
    backgroundColor: red;
  }
`

export default props => (
  <section className="section">
    <h1 className="title is-1">{props.heading}</h1>
    <h4 className="title is-4">{props.date}</h4>
    {/* For each paragraph, render a P and it's children */}
    <MdContainer>
      {props.paragraphs.map(paragraph => (
        renderHastToReact(paragraph)
      ))}
    </MdContainer>
  </section>
)
