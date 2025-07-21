import React from 'react'
import './Campus.css'
import campusImage1 from '../../assets/gallery-1.png'
import campusImage2 from '../../assets/gallery-2.png'
import campusImage3 from '../../assets/gallery-3.png'
import campusImage4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            
            <img src={campusImage1} alt=""/>
            <img src={campusImage2} alt=""/>
            <img src={campusImage3} alt=""/>
            <img src={campusImage4} alt=""/>
            <button className='btn dark-btn'>View More <img src={white_arrow} alt=""/></button>
        </div>
    </div>
  )
}

export default Campus   