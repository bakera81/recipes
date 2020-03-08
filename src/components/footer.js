import React from "react"

import { css } from "@emotion/core"
import 'bulma/css/bulma.css'

import { Link, useStaticQuery, graphql } from "gatsby"
import NavItem from "./navitem"

export const footerStyle = css`
  background-color: #FCDCDF;
`

export default () => (
  <footer className="footer" css={footerStyle}>
    <div className="is-pulled-right">
      <p>This is the footer.</p>
    </div>
  </footer>
)
