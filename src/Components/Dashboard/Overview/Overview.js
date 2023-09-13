import "./Overview.css";
import React from 'react';
import { PieChart, Pie,Tooltip} from 'recharts';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Overview = () => {

    const [daata,setDaata] = useState('');
    const data = [
        { name: 'special beds', value:daata.special},
        { name: 'general beds', value:daata.general}, 
        ];
        
useEffect(() => {
    const token=localStorage.getItem('token');
    const data = {
        cookie_token:token
    }
    axios.put(`${process.env.REACT_APP_API}all/pichart`,data)
    .then((res) => {
        console.log(res.data);
        setDaata(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
  }
)

    return (
      <div className="Overview">
        {/* <div className="dashhsec1">
            <div className="insec11 xd1">
                <span className="ccc">Total Beds Available</span>

      
            </div>
            <div className="insec11 xd2">
            <span className="ccc">General Beds</span>
            </div>
            <div className="insec11 xd3">
                <span className="ccc">Special Beds</span>
            </div>
        </div> */}
        <div className="dashhsec2">
            <div className="insec22">
                {/* <span>Available Beds for booking:90</span>
                <span>Booked Beds:20</span> */}
                {/* <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="70%" cy="30%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="70%" cy="0%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart> */}
           <PieChart width={800} height={600}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>


            </div>
        </div>
        

      </div>
    )
  }
  
  export default Overview

