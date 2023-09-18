import React, { FC, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import logo from '../../assets/logo.svg'
import './Navbar.scss'

export const Navbar: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <nav>
      <NavLink className="logo" to="/" >
        <img id='Layer_1' src={logo} />
        </NavLink>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="nav-list">
          <NavLink className="nav-list-items" to="/Login" >Login</NavLink>
          <NavLink className="nav-list-items" to="/Products" >Products</NavLink>
          <NavLink className="nav-list-items" to="/Contact" >Contact</NavLink>
        </ul>
      )}
      {toggleMenu ? (screenWidth <= 500) && <img onClick={toggleNav} className="menu" src={close} /> : (screenWidth <= 500) && <img onClick={toggleNav} className="menu" src={menu} />}
    </nav>
  )
}

export default Navbar