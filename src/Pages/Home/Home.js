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

        <Navbar defaulth={'Home'}/>
  
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
          <span className='hosp_head'>HOSPITALS</span>

          <Slider/>
          <div className='images'>
            <div className='hospt_img'>
            <img src='https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80'></img>
            <div className='combine'>
            <div className='hospitalstate'>
            <span className='hosp'>ApalloHospital</span>
            <span>Delhi</span>
            </div>
            </div>
            </div>
            
            <div className='hospt_img'>
            <img src='https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80'></img>
            <div className='combine'>
            <div className='hospitalstate'>
            <span className='hosp'>ApalloHospital</span>
            <span>Delhi</span>
            </div>
            </div>
            </div>

            <div className='hospt_img'>
            <img src='https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80'></img>
            <div className='combine'>
            <div className='hospitalstate'>
            <span className='hosp'>ApalloHospital</span>
            <span>Delhi</span>
            </div>
            </div>
            </div>

            <div className='hospt_img'>
            <img src='https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80'></img>
            <div className='combine'>
            <div className='hospitalstate'>
            <span className='hosp'>ApalloHospital</span>
            <span>Delhi</span>
            </div>
            </div>
            </div>

          </div>

          <Support/>
          <Footer/>
        </div>

    </div>
  )
}

export default Home