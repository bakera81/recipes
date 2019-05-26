import React from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import 'bulma/css/bulma.css'

import { Link } from "gatsby"

export default props => (
  <Link to={props.slug} className="navbar-item">
    {props.text}
  </Link>
)
