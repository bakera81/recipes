import React from "react"

import 'bulma/css/bulma.css'

export default props => (
  <div className="content">
    <ol>
      {props.list.map(item => (
        <li>
          {item.text}
          {
            item.protip &&
            <ul>
              <li>{item.protip}</li>
            </ul>
          }
        </li>
      ))}
    </ol>
  </div>
)
