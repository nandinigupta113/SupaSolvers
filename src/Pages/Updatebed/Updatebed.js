import React from "react";
import "../Info/Info.css";
import TextField from "@mui/material/TextField";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HotelIcon from "@mui/icons-material/Hotel";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import logo from "../../Assets/SSlogo.png";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
const Updatebed = () => {
  const navigate = useNavigate(); 
  const handleupdatesubmit= (e) => {
    e.preventDefault();
    navigate('/Dashboard');
  
  }

  return (
    <div className='Updatebed Info'>
      <img className="signlogo" src={logo} alt="" />
      <div className="center">
        <div className="incenter">
          <div className="layer1">
            <div className="signIn_logo">
              <img src={logo} alt=""/>
            </div>
            <span className="welcome">Welcomes You</span>
          </div>
          <div className="layer2_1">
            <span>Provide Details</span>
          </div>
          <div className="layer3_1">
            <div className="input2">
              <div className="ininput2">
                <span className="bed_type">Bed Type</span>
                <div className="divisionbedtype">
                  <div className="general">
                    <span className="txt">General</span>
                    <div className="generalin">
                      <HotelIcon sx={{ height: "5vh", width: "3vw" }} />
                      <TextField
                        id="outlined-basic"
                        sx={{ width: "30vw" }}
                        label="Available Quantity"
                        size="small"
                        variant="outlined"
                        type='number'
                      />
                    </div>
                    <div className="generalin">
                      <CurrencyRupeeIcon sx={{ height: "5vh", width: "3vw" }} />
                      <TextField
                        id="outlined-basic"
                        sx={{ width: "30vw" }}
                        label="Price/Bed"
                        size="small"
                        variant="outlined"
                        type='number'
                      />
                    </div>
                    
                  </div>
                  <div className="special">
                    <span className="txt">Special</span>
                    <div className="generalin">
                      <HotelIcon sx={{ height: "5vh", width: "3vw" }} />
                      <TextField
                        id="outlined-basic"
                        sx={{ width: "30vw" }}
                        label="Available Quantity"
                        size="small"
                        variant="outlined"
                        type='number'
               
                      />
                    </div>
                    <div className="generalin">
                      <CurrencyRupeeIcon sx={{ height: "5vh", width: "3vw" }} />
                      <TextField
                        id="outlined-basic"
                        sx={{ width: "30vw" }}
                        label="Price/Bed"
                        size="small"
                        variant="outlined"
                        type='number'
                    
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input3">
              <div className="ininput3">
              <span className="txt" id='otherfacilites'>Other Facilites</span>
              <textarea></textarea>

              </div>            
            </div>
            <div className="signbtn">
                <button onClick={handleupdatesubmit}>Submit</button>
            </div>        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updatebed