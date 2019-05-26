import React from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import 'bulma/css/bulma.css'

import { Link } from "gatsby"
import NavItem from "./navitem"

const logo = css`
  font-style: italic;
  font-weight: 300;
  color: #000;
  &:hover{
    color: #000;
  }
`

export default () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <Link to="/" css={logo} className="navbar-item">ANTHONY W. BAKER</Link>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <NavItem slug="/projects" text="Projects"></NavItem>
        <NavItem slug="/recipes" text="Recipes"></NavItem>
        <NavItem slug="/writing" text="Writing"></NavItem>
        <NavItem slug="/contact" text="Contact"></NavItem>
      </div>
    </div>
  </nav>

  /*
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });
  */
)
