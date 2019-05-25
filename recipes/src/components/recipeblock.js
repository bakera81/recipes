import React from "react"
import recipeBlockStyles from "./recipeblock.module.css"

export default props => (
  <div className={recipeBlockStyles.recipeblock}>
    <h3>{props.title}</h3>
  </div>
)
