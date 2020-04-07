import React from "react"
import hastToHyperscript from "hast-to-hyperscript";

import P from "./paragraph"

const PWrapper = props => {
  console.log(`PWrapper Props: ${props}`)
  // https://reactarmory.com/guides/learn-react-by-itself/custom-react-elements
  return React.createElement(P, {}, props)
}

const renderHtmlToReact = node => {
  console.log(`renderHtmlToReact Node:`)
  console.log(node)
  if (node.tagName == "p") {
    // https://github.com/syntax-tree/hast-to-hyperscript
    return hastToHyperscript(PWrapper, node);
  } else {
    return hastToHyperscript(React.createElement, node);
  }
};

export default props => (
  <section className="section">
    <h1 className="is-title-1">{props.heading}</h1>
    {/* For each paragraph, render a P and it's children */}
    {props.paragraphs.map(paragraph => (
      renderHtmlToReact(paragraph)
    ))}
    {/* https://michal.miskernik.sk/2018-12-16-rendering-html-in-gatsby/
        https://reactarmory.com/guides/learn-react-by-itself/custom-react-elements
    */}
  </section>
)
