import React, { PureComponent } from 'react'

import NavBar from './NavBar'
import HeaderLink from './HeaderLink'

class Header extends PureComponent {
  render () {
    return (
      <header>
        <NavBar>
          <HeaderLink to='/'>
            Home
          </HeaderLink>
          <HeaderLink to='/about'>
            About
          </HeaderLink>
        </NavBar>
      </header>
    )
  }
}

export default Header
