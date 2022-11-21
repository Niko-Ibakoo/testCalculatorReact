import React from 'react'
import logo from '../img/reactjs-icon.png'
import bgLogo from '../img/reactjs-icon 2.png'

export const Header = () => {
  return (
    <>
         <header>
            <nav className='nav'>
                <img className='logo' src={logo} alt="" />
                <h3>React Facts</h3>
                <h4>React course - Project 1</h4>
            </nav>
        </header>
    </>
  )
}
