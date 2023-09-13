import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Bedstatus.css';
import General from '../Generaltype/General';
import Special from '../Specialtype/Special';

const Bedstatus = () => {
  const [dash_id, setDash_id] = useState("");
  const [dash_result, setDash_result] = useState("");
  const [type_select, setType_select] = useState("General");
  
  const handletype = (val) => {
    setType_select(val);
    console.log(type_select);
  }
  useEffect(() => {
    setDash_id(localStorage.getItem('_id'));
    if(dash_id){
      axios.get(`${process.env.REACT_APP_API}hospital/${dash_id}`)
        .then((res)=>{
            // console.log(res.data)
            setDash_result(res.data.result[0]);
            // dash_result && console.log(dash_result.matchbadData.generalType.availbility);
        })
        .catch((err)=>{
            console.log(err);
        })
          }
    },[dash_id])



  return (
    <div className='bedstatus About'>
      <div className="dash_headingg">
        <span>Bed Availability</span>
      </div>

      <div className='dash_status'>
        <span className={type_select === "General"? 'dash_split1' : 'dash_split2'} value="General" onClick={(e) => handletype("General")}>General Beds</span>
        <span className={type_select === "Special"? 'dash_split1' : 'dash_split2' }value="Special"  onClick={(e) => handletype("Special")}>Special Beds</span>
      </div>

      <div className="dash_txt">
        <span>General:&nbsp;&nbsp;</span>
        {dash_result && <span className="ans">{dash_result.generalType.availbility}</span>}
        {!dash_result && <span className="ans">Loading..</span>}
      </div>
      <div className="dash_txt">
        <span>Special:&nbsp;&nbsp;</span>
        {dash_result && <span className="ans">{dash_result.specialType.availbility}</span>}
        {!dash_result && <span className="ans">Loading..</span>}
      </div>


      {type_select === 'General' && <div>
        <General/>
      </div>}
      {type_select === 'Special' && <div>
        <Special/>
      </div>}
    </div>
  )
}

export default Bedstatus