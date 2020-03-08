import React from "react"

import styled from "@emotion/styled"
import 'bulma/css/bulma.css'

const PageTitle = styled.h1`
  font-family: Chomsky;
  font-smooth: never;
  -webkit-font-smoothing : none;
  font-weight: normal;
  text-align: right;
`

export default props => (
  <section className="section">
    <div className="container">
      <PageTitle className="is-size-1">{props.children}</PageTitle>
    </div>
  </section>

)
