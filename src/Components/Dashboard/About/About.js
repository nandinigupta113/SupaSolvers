import React, { useEffect, useState } from "react";
import "./About.css";
import axios from 'axios';
const About = () => {
  const [dash_id, setDash_id] = useState("");
  const [dash_result, setDash_result] = useState("");
  
  useEffect(() => {
    setDash_id(localStorage.getItem('_id'));
    console.log(dash_id);
    if(dash_id){
      axios.get(`https://wecare-yash.up.railway.app/hospital/${dash_id}`)
      .then((res)=>{
            // console.log(res.data.result[0]);
            setDash_result(res.data.result[0]);
            // dash_result && console.log(dash_result.dataHos);
        })
        .catch((err)=>{
            console.log(err);
        })
          }
    }

    )

  return (
    <div className="About">
      <div className="dash_headingg">
      {dash_result && <span className="ans">{dash_result.hospitalId[0].name}</span>}
      {!dash_result && <span className="ans">Loading..</span>}
      </div>
      {/* <div className="dash_txt">
        <span>Hospital Id:&nbsp;&nbsp;</span>
        {dash_result && <span className="ans">{dash_result.dataHos.Hospitalid}</span>}
      </div> */}
      <div className="dash_txt">
        <span>City:&nbsp;&nbsp;</span>
        {dash_result && <span className="ans">{dash_result.hospitalId[0].city}</span>}
        {!dash_result && <span className="ans">Loading..</span>}
      </div>
      <div className="dash_txt">
        <span>Address:&nbsp;&nbsp;</span>
        {dash_result && <span className="ans">{dash_result.hospitalId[0].address}</span>}
        {!dash_result && <span className="ans">Loading..</span>}
      </div>
      <div className="dash_txt">
        <span>State:&nbsp;&nbsp;</span>
        {dash_result && <span className="ans">{dash_result.hospitalId[0].state}</span>}
        {!dash_result && <span className="ans">Loading..</span>}
      </div>

      <div className="dash_txt">
        <span>Phone No:&nbsp;&nbsp;</span>
        {dash_result && <span className="ans">{dash_result.hospitalId[0].mobileNum}</span>}
        {!dash_result && <span className="ans">Loading..</span>}
      </div>
      <div className="dash_txt">
      <span>Email:&nbsp;&nbsp;</span>
      {dash_result && <span className="ans">{dash_result.hospitalId[0].email}</span>}
      {!dash_result && <span className="ans">Loading..</span>}
      </div>
    </div>
  );
};

export default About;
