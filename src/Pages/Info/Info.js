import React, { useState } from "react";
import "./Info.css";
import TextField from "@mui/material/TextField";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HotelIcon from "@mui/icons-material/Hotel";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import logo from "../../Assets/SSlogo.png";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Info = () => {
  const navigate = useNavigate(); 
  // const [hospitalname, setHospitalname] = useState('');
  const [otherfacility, setOtherfacility] = useState('');
  const [generalquant, setGeneralquant] = useState('');
  const [specialquant, setSpecialquant] = useState('');
  const [generalbedprice, setGeneralbedprice] = useState('');
  const [specialbedprice, setSpecialbedprice] = useState('');
  let token = localStorage.getItem("token");
  const handleinfosubmit = (e) => {
    e.preventDefault();
    const data = {
      "cookie_token":token,
       "generalType":{
        "availbility": parseInt(generalquant),
        "pricePerbad": parseInt(generalbedprice)
       },
       "specialType":{
        "availbility": parseInt(specialquant),
        "pricePerbad": parseInt(specialbedprice)
       },
       "otherFacilities":otherfacility
    }
    axios.put('https://sih-23.herokuapp.com/addbad',data)
    .then((res) => {
      console.log(res.data);
      navigate('/');
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="Info">
      <img className="signlogo" src={logo} />
      <div className="center">
        <div className="incenter">
          <div className="layer1">
            <div className="signIn_logo">
              <img src={logo} />
            </div>
            <span className="welcome">Welcomes You</span>
          </div>
          <div className="layer2_1">
            <span>Provide Details</span>
          </div>
          <div className="layer3_1">
            {/* <div className="input1">
              <LocalHospitalIcon sx={{ width: "3vw", height: "5vh" }} />
              <TextField
                onChange={(e) => {setHospitalname(e.target.value)}}
                value={hospitalname}
                id="outlined-basic"
                label="Hospital Name"
                size="small"
                sx={{ width: "50vw" }}
                variant="outlined"
                type='text'
              />
            </div> */}
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
                        value={generalquant}
                        type='number'
                        onChange={(e) => {setGeneralquant(e.target.value)}}
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
                        value={generalbedprice}
                        onChange={(e) => {setGeneralbedprice(e.target.value)}}
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
                        value={specialquant}
                        onChange={(e) => {setSpecialquant(e.target.value)}}
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
                        value={specialbedprice}
                        onChange={(e) => {setSpecialbedprice(e.target.value)}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input3">
              <div className="ininput3">
              <span className="txt" id='otherfacilites'>Other Facilites</span>
              <textarea onChange={(e) => {setOtherfacility(e.target.value)}} value={otherfacility}></textarea>
              </div>            
            </div>
            <div className="signbtn">
                <button onClick={handleinfosubmit}>Submit</button>
            </div>        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;