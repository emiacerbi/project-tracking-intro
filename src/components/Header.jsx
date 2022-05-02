import React, { useState } from 'react'

import logo from '../assets/logo.svg'
import hamburguer from '../assets/icon-hamburger.svg'
import cross from '../assets/icon-close.svg'
import { MobileMenu } from './MobileMenu'

export const Header = () => {

   const [mobileMenuShown, setMobileMenuShown] = useState(false)

   const mobileMenuIcon = mobileMenuShown ? cross : hamburguer

   const toggleMenu = () => {
      setMobileMenuShown(!mobileMenuShown)
   }


   return (
      <header className='header'>
         <div className='container'>

            {/* Mobile */}
            <nav className='header__nav__mobile'>
               <img src={logo} alt='logo' />
               <img onClick={toggleMenu} src={mobileMenuIcon} alt='logo' className='header__nav__mobile__ham' />
            </nav>

            <MobileMenu mobileMenuShown={mobileMenuShown} />

            {/* Wide Res */}
            <nav className='header__nav font-heading'>
               <img src={mobileMenuIcon} alt='logo' />
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
