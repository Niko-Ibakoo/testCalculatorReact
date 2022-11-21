import React from 'react'
import headshoot from '../img/headshoot.png'

export const Info = () => {
  return (

    <>
      <div className='info-cnt'>
        <img className='hero' src={headshoot} alt="photo" />
        <h1 style={{marginTop:"2px"}}>Laura Smith</h1>
        <h4 style={{color: "#F3BF99",marginTop:"-30px"}}>Frontend Developer</h4>
        <p style={{marginTop:"-10px", fontSize:"10px"}}>laurasmithh@gmail.com</p>
    </div>
    <button className='email-btn'><i class="fa fa-solid fa-envelope"></i> Email</button> 
    <button className='linkedin-btn'><i class="devicon-linkedin-plain"></i> LinkedIn</button>
    </>

    
  )
}
