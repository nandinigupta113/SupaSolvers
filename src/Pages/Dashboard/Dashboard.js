import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import logo from '../../Assets/SSlogo.png';
import About from '../../Components/Dashboard/About/About';
import Bedstatus from '../../Components/Dashboard/Bed Status/Bedstatus';
import Hosprefimg from "../../Assets/hosprefimg.png";
import leaf from '../../Assets/leaf.png'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Dashboard = () => {


    const [dash_id, setDash_id] = useState("");
    const [dash_result, setDash_result] = useState("");
    
    useEffect(() => {
      setDash_id(localStorage.getItem('_id'));
      console.log(dash_id);
      if(dash_id){
          axios.get(`https://sih-23.herokuapp.com/hospital/${dash_id}`)
          .then((res)=>{
            //   console.log(res.data)
              setDash_result(res.data);
            //   dash_result && console.log(dash_result.dataHos);
          })
          .catch((err)=>{
              console.log(err);
          })
            }
      }
  
      )

    const [clicked, setClicked] = useState("about");
    const navigate = useNavigate(); 
    const handledashboardbtn = (val) => {
        setClicked(val);
        // console.log(val);
    }
  return (
    
    <div className='Dashboard'>
        <div className='headerdash'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <div className='dashh'>
                <span>Dashboard</span>
            </div>
        </div>
        <div className='dshsec'>
        <div className='dashsec1'>
                <div onClick={(e) => handledashboardbtn("about")}className={clicked === "about"?"dashsec1_xy" : "dashsec1_xx" }>
                    <img src={leaf}></img>
                <span value="about"  className='colorx'>About</span>
                </div>
                <div onClick={(e) => handledashboardbtn("bedstatus")} className={clicked === "bedstatus"?"dashsec1_xy" : "dashsec1_xx" }>
                <img src={leaf}></img>
                <span className='colorx' value="bedstatus" >Bed status</span>
                </div>
        </div>

        
        <div className='dashsec2'>
           {clicked==="about" &&  <About/>}
           {clicked==="bedstatus" &&  <Bedstatus/>}
        </div>
        <div className='dashsec3'>
            <div className='dash_img'>
                <img src={Hosprefimg}></img>
            </div>
            <div className='img_below'>
            {dash_result && <span className="main">{dash_result.dataHos.name}</span>}
            {dash_result && <span className="main">{dash_result.dataHos.city}</span>}
            </div>
            <div>
               {clicked === 'about' && <button className='edit_btn' onClick={(e) => {e.preventDefault();navigate('/Updatebed')}}>Edit Details</button>}
               {clicked === 'bedstatus' && <button className='edit_btn' onClick={(e) => {e.preventDefault();navigate('/Updatebed')}}>Add Bed</button>}

            </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard