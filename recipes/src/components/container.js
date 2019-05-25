import React from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/core"


const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
`

export default ({ children }) => (
  <Container>{children}</Container>
)
