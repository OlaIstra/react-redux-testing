import React from 'react'

export const Header = () => {
  return (
    <nav data-test="nav">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo" data-test="logo">
          Logo
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
