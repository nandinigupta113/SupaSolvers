import React, { useEffect, useState } from "react";
import "./Hosplist.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Button from '@mui/material/Button';
import Button from '@mui/material/Button';
import { width } from "@mui/system";
const Hosplist = ({ email, hospid, name, mobilenum, city }) => {
  const navigate = useNavigate();
  const [beds_avail, setBeds_avail] = useState("");
  const [disable, setDisable] = useState("");


  useEffect(() => {
    if (hospid) {
      const data = {
        id: hospid,
      };
      axios
        .post("https://sih-23.herokuapp.com/hospitalbyid", data)
        .then((res) => {
          setBeds_avail(res.data);
          if((res.data.matchbadData.generalType.availbility + res.data.matchbadData.specialType.availbility) <= 0){
            setDisable('yes');
          }
        })
        .catch((err) => {
          console.log(err.respone.data.message);
        });
    }
  });

  return (
    <div className="hrline">
    <div className="Hosplist">
      <div className="inHosplist">
        <div className="hosplistimg">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80"></img>
        </div>
        <div className="hosplisttxt">
          <div className="hosplisttitle">
            <span key={name}>{name}</span>
          </div>
          <div className="shorttxt">
            {/* <div className='line'>
                    <span>Contact No:</span>
                    <span key={mobilenum} className='bluetxt'>{mobilenum}</span>
                </div> */}

            <div className="line">
              <span>Email:</span>
              <span key={email} className="bluetxt">
                {email}
              </span>
            </div>

            <div className="line">
              <span>Contact No:</span>
              <span key={mobilenum} className="bluetxt">
                {mobilenum}
              </span>
            </div>

            <div className="line">
              <span>Beds Available:</span>
              {beds_avail && (
                <span className="bluetxt">
                  {beds_avail.matchbadData.generalType.availbility}(General) +{" "}
                  {beds_avail.matchbadData.specialType.availbility}(Special)
                </span>
              )}{" "}
            </div>
          </div>
        </div>
        <div className="moreinfo">

          <span>

                 {disable === '' && <Button  color="success"sx={{width:"10rem"}} variant="contained"  onClick={(e) => {
              e.preventDefault();
              navigate("/bedavailability", { state: { hospid } });
            }} >Book a bed</Button>}
                 {disable === 'yes' && <Button disabled  color="success"sx={{width:"10rem"}} variant="contained">Book a bed</Button>}

          </span>
        </div>
      </div>
    </div>
    <div>

    </div>
      <hr style={{width:"75vw", height:"2px",borderwidth:"0",color:"gray",backgroundColor:"gray"}}/>
</div>
  );
};

export default Hosplist;
