import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider=useRef();
    let tx=0;

    const slideForward = () => {
       if(tx>-50){
        tx-=25;
       }
       slider.current.style.transform= `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx<0){
        tx+=25;
       }
       slider.current.style.transform= `translateX(${tx}%)`;
    } 


  return (
    <div className='testimonials'>
        
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt=""/>
                            <div>
                                <h3>Marry Felson</h3>
                                <span>Michigan, USA</span>
                            </div>
                        </div>
                        <p>
                            Hey there! I am Marry Felson, a student at Edufy. I have 
                            been studying here for the past two years and I can say that 
                            it has been a great experience. The faculty is very supportive 
                            and the curriculum is well-structured. I have learned a lot and 
                            made many friends along the way.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt=""/>
                            <div>
                                <h3>Jack Miller</h3>
                                <span>Texas, USA</span>
                            </div>
                        </div>
                        <p>
                            Hey there! I am Jack Miller, a student at Edufy. I have 
                            been studying here for the past two years and I can say that 
                            it has been a great experience. The faculty is very supportive 
                            and the curriculum is well-structured. I have learned a lot and 
                            made many friends along the way.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt=""/>
                            <div>
                                <h3>Emily </h3>
                                <span>New York, USA</span>
                            </div>
                        </div>
                        <p>
                            Hey there! I am Emily, a student at Edufy. I have 
                            been studying here for the past two years and I can say that 
                            it has been a great experience. The faculty is very supportive 
                            and the curriculum is well-structured. I have learned a lot and 
                            made many friends along the way.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt=""/>
                            <div>
                                <h3>Michael</h3>
                                <span>Massuchussets, USA</span>
                            </div>
                        </div>
                        <p>
                            Hey there! I am Michael, a student at Edufy. I have 
                            been studying here for the past two years and I can say that 
                            it has been a great experience. The faculty is very supportive 
                            and the curriculum is well-structured. I have learned a lot and 
                            made many friends along the way.
                        </p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Testimonials