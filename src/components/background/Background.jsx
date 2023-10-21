import React from 'react'
import Search from '../search/Search';
import bg from './bg.jpg';
import "./style.css"

const Background = () => {
  return (
    <>
    
    <div className="bgImg">
      <img  src={bg} alt='img'/>
      <div className="title">
      Welcome.
      <div className="subtitle">
          One stop place to find millions of images.Explore now.
        </div>
      <div>
        
      <Search/></div>
      </div>
      
    </div>
    </>
  )
}

export default Background;