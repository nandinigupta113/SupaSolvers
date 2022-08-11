import React from 'react'
import './Home.css'
import logo from '../../Assets/SSlogo.png'
import SearchIcon from '@mui/icons-material/Search';
const Home = () => {
  return (
    <div className='Home'>
        <div className='header'>
        <div className='logo'>
          <img className='logoin' src={logo}/>
        </div>
        <div className='head'>
          <span>Home</span>
          <span>Bed Availablity</span>
          <span>Hospitals Nearby</span>
          <span>Medical Equipments</span>
          <span>UserLogin</span>
          {/* <span>{SearchIcon}</span> */}
        </div>
        </div>
    </div>
  )
}

export default Home