import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: FC = () => {
    return (
        <>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/Login" >Login</NavLink>
            <NavLink to="/Product" >Product</NavLink>
            <NavLink to="/Contact" >Contact Us</NavLink>
        </>
    )
}

export default Navbar