import React,{useState} from 'react'
import './Navbar.css'
import PageviewIcon from '@mui/icons-material/Pageview';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import logo from '../../Assets/SSlogo.png'
import { useNavigate } from "react-router-dom";
import Home from '../../Pages/Home/Home';
const Navbar = ({defaulth}) => {
 const navigate = useNavigate();

  return (
    <div className='Navbar'>
         <div className='header'>
        <div className='logo'>
          <img className='logoin' src={logo}/>
        </div>
        <div className='head'>
          <button className={defaulth === 'Home'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/');}} value="Home">Home</button>
          <button className={defaulth === 'Hospitals Nearby'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/hospitalsnearby');}} value="Hospitals Nearby">Beds Availability</button>
          {/* <button className={pgchoice === 'Bed Availability'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => { handleChoice(e.target.value); navigate('/bedavailability');}} value="Bed Availability">Bed Availability</button> */}
          {/* <button className={defaulth === 'Medical Equipments'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/medicalequip');}} value="Medical Equipments">Medical Equipments</button> */}
          <button className={defaulth === 'UserLogin'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/sign');}} value="Login">SignIn/SignUp</button>
          {/* <PageviewIcon  color="primary" sx={{cursor:'pointer', height:"3rem",width:"3rem"}} /> */}
          <div className='location'>
          {/* <span><PlaceOutlinedIcon sx={{cursor:'pointer',marginTop:'0.4rem', height:"1.7rem",width:"2rem"}}/></span>
          <span>24/7</span> */}
          <span >Emergency</span>
          <AddBoxIcon sx={{color:"white"}}/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar