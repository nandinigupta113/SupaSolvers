import React, { useEffect, useState } from "react";
import "./Hosplist.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Button from '@mui/material/Button';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { width } from "@mui/system";
import { LocalDining } from "@mui/icons-material";
const Hosplist = ({ email, hospid, name, mobilenum, city }) => {
  const navigate = useNavigate();
  const [beds_avail, setBeds_avail] = useState("");
  const [disable, setDisable] = useState("");


  useEffect(() => {
    if (hospid) {
      // const data = {
      //   Id: hospid,
      // };
      axios
        .get(`https://wecare-yash.up.railway.app/hospital/${hospid}`)
        .then((res) => {
          setBeds_avail(res.data.result[0]);
          // res.data[0] && console.log( res.data[0].generalType.availbility + res.data[0].specialType.availbility);
          if(res.data.result[0] && (res.data.result[0].generalType.availbility + res.data.result[0].specialType.availbility) <= 0){
            setDisable('yes');
          }
        })
        .catch((err) => {
          console.log(err);
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
              {beds_avail ? (
                <span className="bluetxt">
                  {beds_avail.generalType.availbility}(General) +{" "}
                  {beds_avail.specialType.availbility}(Special)
                </span>
              ) : <span className="bluetxt">Loading..</span> }
              {" "}
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
