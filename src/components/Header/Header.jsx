import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Header = () => {
  const [menu, setMenu] = useState(true)



  return (
    <header className='py-3 px-8'>
      <div className="logo">
        <a href="/"><h1 className='logo'>ClientCont</h1></a>
      </div>
      <nav className={!menu && "active"}>
        <NavLink onClick={() => !menu ? setMenu(!menu) : ''} className="mx-3 text-lg" to="/">Home</NavLink>
        <NavLink onClick={() => !menu ? setMenu(!menu) : ''} className="mx-3 text-lg" to="/statistics">Statistics</NavLink>
        <NavLink onClick={() => !menu ? setMenu(!menu) : ''} className="mx-3 text-lg" to="/clients">Clients</NavLink>
      </nav>
      {menu ? <div className="menu_btn open_menu cursor-pointer" onClick={() => setMenu(!menu)}></div> : <div className="menu_btn close_menu cursor-pointer" onClick={() => setMenu(!menu)}></div>}
    </header>
  )
}

export default Header