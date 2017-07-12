import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Img from 'components/Img'
import logo from 'assets/logo_white.png'
import Wrapper from './Wrapper'

class Header extends PureComponent {
  render () {
    return (
      <Wrapper>
        <header className='sticky'>
          <label className='drawer-toggle button' htmlFor='navigation-toggle' />
          <Link to='/' className='logo hidden-sm'>
            <Img src={logo} alt='React Redux Boilerplate Logo' />
            <span>React Redux Boilerplate</span>
          </Link>
          <Link to='/features' className='button pull-right hidden-sm'>Features</Link>
          <Link to='/about' className='button pull-right hidden-sm'>About</Link>
        </header>
        <input id='navigation-toggle' type='checkbox' />
        <nav className='drawer hidden-md hidden-lg'>
          <label htmlFor='navigation-toggle' className='close' />
          <br />
          <Link to='/'>Home</Link>
          <Link to='/features'>Features</Link>
          <Link to='/about'>About</Link>
        </nav>
      </Wrapper>
    )
  }
}

export default Header
