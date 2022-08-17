import React,{useState} from 'react'
import './Navbar.css'
import PageviewIcon from '@mui/icons-material/Pageview';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import logo from '../../Assets/SSlogo.png'
const Navbar = () => {

    
 const [pgchoice, setPgchoice] = useState("Home");

 const handleChoice = (val) => {
   setPgchoice(val);
 }

  return (
    <div className='Navbar'>
         <div className='header'>
        <div className='logo'>
          <img className='logoin' src={logo}/>
        </div>
        <div className='head'>
          <button className={pgchoice === 'Home'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {handleChoice(e.target.value)}} value="Home">Home</button>
          <button className={pgchoice === 'Bed Availability'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {handleChoice(e.target.value)}} value="Bed Availability">Bed Availability</button>
          <button className={pgchoice === 'Hospitals Nearby'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {handleChoice(e.target.value)}} value="Hospitals Nearby">Hospitals Nearby</button>
          <button className={pgchoice === 'Medical Equipments'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {handleChoice(e.target.value)}} value="Medical Equipments">Medical Equipments</button>
          <button className={pgchoice === 'UserLogin'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {handleChoice(e.target.value)}} value="UserLogin">UserLogin</button>
          <PageviewIcon  color="primary" sx={{cursor:'pointer', height:"3rem",width:"3rem"}} />
          <div className='location'>
          <span><PlaceOutlinedIcon sx={{cursor:'pointer',marginTop:'0.4rem', height:"1.7rem",width:"2rem"}}/></span>
          <span>24/7</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar