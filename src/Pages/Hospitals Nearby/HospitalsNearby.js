import React, { useEffect, useState } from "react";
import "./HospitalsNearby.css";
import Hosplist from "../../Components/hosplist/Hosplist";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import Support from "../../Components/Support/Support";
import Footer from "../../Components/Footer/Footer";

const HospitalsNearby = () => {
  const [hospdata, setHospdata] = useState([""]);

  useEffect(() => {
    axios
      .get("https://sih-23.herokuapp.com/all/hospitals")
      .then((res) => {
        setHospdata(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="HospitalsNearby">
      <Navbar defaulth={'Hospitals Nearby'}/>
      <div className="hosplisttt">
        {hospdata && hospdata.map((val, i) => (
        <Hosplist hospid={val._id} name={val.name} city={val.city} email={val.email} mobilenum={val.mobileNum} />
        ))}
      </div>
      
      <Support/>
        <Footer/>
    </div>
  );
};

export default HospitalsNearby;
