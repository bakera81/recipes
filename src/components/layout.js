import React from "react"

import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./navbar"


export default ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
)
