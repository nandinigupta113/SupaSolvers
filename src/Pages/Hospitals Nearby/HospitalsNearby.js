import React from 'react'
import './HospitalsNearby.css';
import Hosplist from '../../Components/hosplist/Hosplist';
import Navbar from '../../Components/Navbar/Navbar';
const HospitalsNearby = () => {
  return (
    <div className='HospitalsNearby'>
        <Navbar/>
        <Hosplist/>
    </div>
  )
}

export default HospitalsNearby