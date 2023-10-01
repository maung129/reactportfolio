import React from 'react'
import './menu.css'

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"menu "+ (menuOpen && "active")} >
        <ul>
            <li>
                <a href="#intro" onClick={()=>setMenuOpen(false)}>Home</a>
                <a href="#portfolio" onClick={()=>setMenuOpen(false)}>Portfolio</a>
                <a href="#works" onClick={()=>setMenuOpen(false)}>Works</a>
                <a href="#testimonials" onClick={()=>setMenuOpen(false)}>Testimonials</a>
                <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu