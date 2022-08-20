import React, {useState} from "react";
import "./BedAvailability.css";
import Hosprefimg from "../../Assets/hosprefimg.png";
import StarIcon from "@mui/icons-material/Star";
import Navbar from "../../Components/Navbar/Navbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';
// import Footer from '../../Components/Footer/Footer';
// import Support from '../../Components/Support/Support';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { fontSize } from "@mui/system";

const BedAvailability = () => {
  const [bedtype, setBedtype] = useState("");

  const handlebedtype = (event) => {
    setBedtype(event.target.value);
  };

  return (
    <div className="BedAvailability">
      <Navbar />
      <div className="availablesec">
        <div className="secdiv1">
          <img src={Hosprefimg}></img>
        </div>
        <div className="secdiv2">
          <div className="titlehosp">
            <span>Fortis Hospital</span>
            <StarIcon sx={{ marginTop: "3rem", marginLeft: "1rem" }} />
            <StarIcon sx={{ marginTop: "3rem", marginLeft: "1rem" }} />
            <StarIcon sx={{ marginTop: "3rem", marginLeft: "1rem" }} />
            <StarIcon sx={{ marginTop: "3rem", marginLeft: "1rem" }} />
          </div>
          <div className="loc">
            <span>Location:</span>
            <span className="ans">Delhi</span>
          </div>
          {/* <div className="Distance">
                <span></span>
            </div> */}
          <div className="BedsAvailable loc">
            <span>Beds Available:</span>
            <span className="ans">98</span>
          </div>
          <div className="BedsPrice loc">
            <span>Bed Type:</span>

            <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
              <InputLabel id="demo-select-small">Bed Type</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={bedtype}
                label="Bed Type"
                onChange={handlebedtype}
              >
                <MenuItem value="General">General</MenuItem>
                <MenuItem value="Special">Special</MenuItem>
              </Select>
            </FormControl>


          </div>
          <div className="BedsPrice loc">
            <span>Price For Bed:</span>
            <span className="ans">7495</span>
          </div>
          <div className="otherfacility loc">
            <span className="loc">Other Facility:</span>
            <span className="ans">X-Ray ,ECG</span>
          </div>
          <div className="ContactNo loc">
            <span>Contact No:</span>
            <span className="ans">9089******</span>
          </div>
          <div className="bookbed">
             <Button variant="contained" sx={ {marginTop:"2vh", fontSize:"1.5rem",width:"30vw"}}>Book a Bed</Button>
          </div>

        </div>
      </div>
      {/* <Support/>
      <Footer/> */}
    </div>
  );
};

export default BedAvailability;
