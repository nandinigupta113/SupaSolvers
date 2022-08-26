import React, { useEffect, useState } from "react";
import "./HospitalsNearby.css";
import Hosplist from "../../Components/hosplist/Hosplist";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import Support from "../../Components/Support/Support";
import Footer from "../../Components/Footer/Footer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const HospitalsNearby = () => {
  const [hospdata, setHospdata] = useState([""]);
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [happen, setHappen] = useState('');

   useEffect(() => {
    axios
      .get("https://sih-23.herokuapp.com/all/hospitals")
      .then((res) => {
        pincode === "" &&  city === "" && setHospdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });



  const handlefilter = () =>{
    pincode !== "" && axios.get(`https://sih-23.herokuapp.com/all/hospitalsby/${pincode}`)
    .then((res) => {
      console.log(res.data)
      if(res.data){
        setHospdata([""]);
        setHospdata(res.data);

      }
    })
    .catch((err)=> {
      console.log(err);
    })

    city !== "" &&  axios.get(`https://sih-23.herokuapp.com/all/hospitals/${city}`)
    .then((res) => {
      console.log(res.data)
      if(res.data){
        setHospdata([""]);
        setHospdata(res.data);

      }
    })
    .catch((err)=> {
      console.log(err);
    })


  }


  return (
    <div className="HospitalsNearby">
      <Navbar defaulth={"Hospitals Nearby"} />

      <div className="filterout">
      <TextField
          label="pincode"
          id="outlined-size-small"
          defaultValue=""
          size="small"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <TextField
          label="District"
          id="outlined-size-small"
          defaultValue=""
          size="small"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" onClick={handlefilter}>Filter Out</Button>{" "}
      </div>

      <div className="hrline">
        <hr
          style={{
            width: "75vw",
            height: "2px",
            borderwidth: "0",
            color: "gray",
            backgroundColor: "gray",
          }}
        />
      </div>
      <div className="hosplisttt">

        {hospdata &&
          hospdata.map((val, i) => (
            <Hosplist
              email={val.email}
              hospid={val._id}
              name={val.name}
              city={val.city}
              mobilenum={val.mobileNum}
            />
          ))}
      </div>

      <Support />
      <Footer />
    </div>
  );
};

export default HospitalsNearby;
