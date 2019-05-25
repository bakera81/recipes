import React from "react"
import { Link } from "gatsby"
import navbarStyles from "./navbar.module.css"

export default () => (
  <div className={navbarStyles.navbar}>
    <Link to="/">Anthony W. Baker</Link>
  </div>
)
