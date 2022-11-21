import React from 'react'
import hero from '../img/headshoot.png'
import star from '../img/Star 1.png'

export const Project3 = () => {
  return (
    <div className='card-2'>
     <img src={hero} alt="" />
     <div className="card-stats">
        <img className='card-star' src={star} alt="" />
        <span>5.0</span>
        <span> (6) • </span>
        <span>USA</span>
     </div>
     <p>LIfe Lessons with Kate</p>
     <p><span className='bold'>From $136</span> / person</p>
    </div>
  )
}
