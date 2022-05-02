import React from 'react'

export const MobileMenu = ({ mobileMenuShown }) => {

  const position = mobileMenuShown && 'position'

  return (
    <>
      <nav className={`mobile-menu uppercase font-heading flex ${position}`}>
        <a className='mobile-menu__link'>product</a>
        <a className='mobile-menu__link'>features</a>
        <a className='mobile-menu__link'>pricing</a>

        <hr className='line' />

        <a className='mobile-menu__link disabled'>login</a>
      </nav>
    </>
  )
}
