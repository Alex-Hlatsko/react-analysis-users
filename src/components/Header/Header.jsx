import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Header = () => {
  return (
    <header className='py-3 px-8'>
      <nav className='flex justify-end'>
        <NavLink className="mx-3 text-lg" to="/">Home</NavLink>
        <NavLink className="mx-3 text-lg" to="/statistics">Statistics</NavLink>
        <NavLink className="mx-3 text-lg" to="/clients">Clients</NavLink>
      </nav>
    </header>
  )
}

export default Header