import React, { useContext } from 'react'
import "./style.css";
import { ImageContext } from '../../App';
import Image from '../image/Image';




const Images = () => {
  const {response, isLoading} = useContext(ImageContext)

  return (
    <>
      
      <div className="images">
       { response?.map((data, key)=> <Image key={key} data={data}/>)}
      </div>
    </>
  )
}

export default Images