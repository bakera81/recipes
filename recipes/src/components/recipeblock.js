import React from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

const RecipeBlock = styled.div`
  background-color: pink;
`

export default props => (
  <RecipeBlock>
    <h3>{props.title}</h3>
  </RecipeBlock>
)
