import React from 'react'
import './intro.css'
import { init } from 'ityped'
import { useEffect,useRef } from 'react'

const Intro = () => {
  const textRef = useRef();
 useEffect(()=>{
  init(textRef.current, { showCursor: true, backDelay:1500,backSpeed:60,
     strings: ['Junior Web Developer', 'Junior Web Desinger' ] })
 },[])
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There , I am </h2>
          <h1>Moe Phyu Sin Maung</h1>
          <h3>A Passionate <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro