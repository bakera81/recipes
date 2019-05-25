import React from "react"

import styled from "@emotion/styled"
import 'bulma/css/bulma.css'

const RecipeBlock = styled.div`
  background-color: pink;
`

export default props => (
  <div className="column">
    <RecipeBlock className="box">
      <h3>{props.title}</h3>
    </RecipeBlock>
  </div>
)
