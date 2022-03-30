import React from 'react'
import APT1 from '../../assets/apt1.jpeg'
import APT2 from '../../assets/apt2.jpeg'
import APT3 from '../../assets/apt3.jpeg'
import './Best.css'

const Best = () => {
  return (
    <div className='best'>
      <h1>Find Best Rated Properties</h1>
      <div>
        <p><span class="bold">All</span></p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agricultural</p>
      </div>
      <div className="container">
        <img src={APT1} alt="APT1" />
        <img src={APT2} alt="APT2" />
        <img src={APT3} alt="APT3" />
      </div>
      <button className="btn">View All</button>
      </div>
  )
}

export default Best