import React,{useState} from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';
import Footer from '../../Components/Footer/Footer';
import Support from '../../Components/Support/Support';
import logo from '../../Assets/SSlogo.png'
const Home = () => {

  return (
    <div className='Home'>
      <div className='basecover'>
      <div className='base'>

        <Navbar/>
  
        <div className='tagline'>
            <span>You don't need to worry Of your Health because</span>
        </div>
          <div className='logodiv'>
          <img src={logo}/>
          </div>
        </div>
        </div>
        <div className='options'>
          <div className='opchoice'>BED AVAILABILITY</div>
          <div id="hospitalchoice" className='opchoice'>HOSPITALS</div>
          <div className='opchoice'>HEALTH CARE</div>
        </div>
        <div className='sec2'>
          {/* <span className='hosp_head'>HOSPITALS</span> */}

          {/* <Slider/> */}

          {/* <Support/> */}
          {/* <Footer/> */}
        </div>

    </div>
  )
}

export default Home