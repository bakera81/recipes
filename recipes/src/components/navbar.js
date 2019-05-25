import React from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { Link } from "gatsby"

const NavItem = styled.div`
  width: 100%;
  background-color: pink;
`
export default () => (
  <NavItem>
    <Link to="/">Anthony W. Baker</Link>
  </NavItem>
)
