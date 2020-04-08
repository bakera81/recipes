import React from "react"
import styled from "@emotion/styled"

import hastToHyperscript from "hast-to-hyperscript";




const renderHastToReact = node => {
    return hastToHyperscript(React.createElement, node);
}

const MdContainer = styled.div`
  p {
    color: red;
  }
`

export default props => (
  <section className="section">
    <h1 className="is-title-1">{props.heading}</h1>
    {/* For each paragraph, render a P and it's children */}
    <MdContainer>
      {props.paragraphs.map(paragraph => (
        renderHastToReact(paragraph)
      ))}
    </MdContainer>
  </section>
)
