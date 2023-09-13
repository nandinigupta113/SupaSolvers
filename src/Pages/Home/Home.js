import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';
import Footer from '../../Components/Footer/Footer';
import Support from '../../Components/Support/Support';
import logo from '../../Assets/SSlogo.png'
// import Chat from '../../Components/Chat/Chat'

import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handlebedavailnavigate = () => {
    navigate("/HospitalsNearby");
  }

  const handledistrictwise = () => {
    navigate('/districtwise')
  }
  return (
    <div className='Home'>
      <div className='basecover'>
      <div className='base'>

        <Navbar defaulth={'Home'}/>

        <div className='tagline'>
            <span>You don't need to worry Of your Health because</span>
        </div>
        <div className='stickavail' onClick={handledistrictwise}>
            <span>District Wise Bed Availability</span>
        </div>
          <div className='logodiv'>
          <img src={logo} alt=''/>
          </div>
        </div>
        </div>
        <div className='options'>
          <div className='opchoice' onClick={handlebedavailnavigate}>BED AVAILABILITY</div>
          <div id="hospitalchoice" className='opchoice'>HOSPITALS</div>
          <div className='opchoice'>HEALTH CARE</div>
        </div>
        <div className='sec2'>
          {/* <span className='hosp_head'>HOSPITALS</span> */}

          <Slider/>
            
          {/* <Chat/> */}
          <Support/>
          <Footer/>
        </div>

    </div>
  )
}

export default Home