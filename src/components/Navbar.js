import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/error-test'>Error Boundary Test</NavLink>
        </nav>
    </div>
  )
}

export default Navbar