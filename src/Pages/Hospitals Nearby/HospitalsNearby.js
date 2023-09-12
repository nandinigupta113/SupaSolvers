import React, { useEffect, useState } from "react";
import "./HospitalsNearby.css";
import Hosplist from "../../Components/hosplist/Hosplist";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import Support from "../../Components/Support/Support";
import Footer from "../../Components/Footer/Footer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
const HospitalsNearby = () => {
  const [hospdata, setHospdata] = useState();
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [happen, setHappen] = useState('');
   useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}all/hospitals`)
      .then((res) => {
        // console.log(res.data);
        pincode === "" &&  city === "" && setHospdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });  
  });



  const handlefilter = () =>{

    if(pincode !== "" && city == ""){
      const updatedItems = hospdata.filter((curr) => {
        // console.log(curr.pincode);
        return (
          curr.pincode === parseInt(pincode)
        );
      })
      setHospdata(updatedItems);
    }
    else if(pincode == "" && city !== ""){
      const updatedItems = hospdata.filter((curr) => {
        return (
          curr.city === city
        );
      })
      setHospdata(updatedItems);
    }
    else if(pincode !== "" && city !== ""){
      const updatedItems = hospdata.filter((curr) => {
        return (
          curr.city === city && curr.pincode === parseInt(pincode)
        );
      })
      setHospdata(updatedItems);
    }

    // pincode !== "" && axios.get(`https://wecare-yash.up.railway.app/all/hospitalsbypin/${pincode}`)
    // .then((res) => {
    //   console.log(res.data)
    //   if(res.data){
    //     setHospdata();
    //     setHospdata(res.data);
    //   }
    // })
    // .catch((err)=> {
    //   console.log(err);
    // })

    // city !== "" &&  axios.get(`https://wecare-yash.up.railway.app/all/hospitals/${city}`)
    // .then((res) => {
    //   console.log(res.data)
    //   if(res.data){
    //     setHospdata();
    //     setHospdata(res.data);

    //   }
    // })
    // .catch((err)=> {
    //   console.log(err);
    // })




  }


  return (
    <div className="HospitalsNearby">
      <Navbar defaulth={"Hospitals Nearby"} />

      <div className="filterout">
      <TextField
          label="pincode"
          id="outlined-size-small"
          size="small"
          value={pincode}
          type="number"
          onChange={(e) => setPincode(e.target.value)}
        />
        <TextField
          label="City"
          id="outlined-size-small"
          size="small"
          type="text"
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

        {hospdata ?
          hospdata.map((val, i) => (
            <Hosplist
              key={val._id}
              email={val.email}
              hospid={val._id}
              name={val.name}
              city={val.city}
              mobilenum={val.mobileNum}
            />
          )) : 
          <div className="cprog"><CircularProgress className="incprog" color="inherit"/></div>
        }
      </div>

      <Support />
      <Footer />
    </div>
  );
};

export default HospitalsNearby;
