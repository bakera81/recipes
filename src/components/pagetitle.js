import React from "react"

import styled from "@emotion/styled"
import 'bulma/css/bulma.css'

const PageTitle = styled.h1`
  text-align: center;
`

export default props => (
  <section className="section">
    <div className="container">
      <PageTitle className="is-size-1">{props.title}</PageTitle>
      <hr />
    </div>
  </section>

)
