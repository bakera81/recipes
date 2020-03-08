import React from "react"

import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./navbar"
import Footer from "./footer"


export default ({ children }) => (
  <div>
    <NavBar />
    <section className="section">
      <div className="container">
        {children}
      </div>
    </section>
    <Footer />
  </div>
)
