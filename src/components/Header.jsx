import React from 'react'

import logo from '../assets/logo.svg'
import hamburguer from '../assets/icon-hamburger.svg'

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>

        {/* Mobile */}
        <nav className='header__nav__mobile'>
          <img src={logo} alt='logo' />
          <img src={hamburguer} alt='logo' className='header__nav__mobile__ham' />
        </nav>

        {/* Wide Res */}
        <nav className='header__nav font-heading fs-2xl'>
          <img src={logo} alt='logo' />
          <div className='header__nav__links flex uppercase'>
            <a className='header__nav__links__link'>product</a>
            <a className='header__nav__links__link'>features</a>
            <a className='header__nav__links__link'>pricing</a>
            <span>•</span>
            <a className='header__nav__links__link disabled'>login</a>
          </div>
        </nav>

      </div>
    </header>
  )
}
