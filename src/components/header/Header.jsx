import React from 'react'
import './style.css'
import logo from "../header/logo.jpg"
import ReactSwitch from 'react-switch'
const Header = () => {
  return (
    <div className="header">
    <img className="logo" src={logo}/>
      <span className='tagName'>
      Pixels</span>
      {/* <ReactSwitch className='mode' onChange={toggleTheme}/> */}
      
    </div>
  )
}

export default Header