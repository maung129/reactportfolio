import React from 'react'
import './topbar.css';


const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>
          <i className="fa-brands fa-modx fa-bounce" ></i>
          </a>
          <div className="itemContainer">
            <i className="fa-solid fa-users icons"><span>+23 342</span></i>
          </div>
          <div className="itemContainer">
            <i className="fa-solid fa-envelope icons"><span>awea60505@gmail.com</span></i>
          </div>
        </div>
        <div className="right">
            <div className="hamburger" onClick={()=>{
              setMenuOpen(!menuOpen)
            }}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar