import React, {useState} from "react";
import "./Signupcomp.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Signupcomp = () => {

  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landline, setLandline] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [hospitaltype, setHospitaltype] = useState("");

  return (
    <div className="Signupcomp">
      <div className="userlogo2">
        <AccountCircleIcon
          sx={{
            borderRadius: "100rem",
            bgcolor: "white",
            height: "5rem",
            width: "5rem",
          }}
        />
      </div>
      <div className="layer3">
        <div className="Userbox2">
          <div className="text2" id="textt">
            <span></span>
            <input onChange={(e) => {setHospitalName(e.target.value)}} value={hospitalName} placeholder="Hospital Name" />
          </div>
          <div className="text2in" id="text">
            <div className="ht">Hospital Type</div>
            <div className="rradio">
              <div>
                <input onChange={(e) => {setHospitaltype(e.target.value)}}  type="radio" value="governmenttype" name="ht" />
                <label for="governmenttype">Government</label>
              </div>
              <div>
                <input onChange={(e) => {setHospitaltype(e.target.value)}}  type="radio" value="privatetype" name="ht" />
                <label for="privatetype">Private</label>
              </div>
            </div>
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setAddress(e.target.value)}} value={address} placeholder="Address" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setCity(e.target.value)}} value={city} placeholder="City" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setState(e.target.value)}} value={state} placeholder="State" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setPhone(e.target.value)}} value={phone}  placeholder="Phone No." />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setHospitalId(e.target.value)}} value={hospitalId} placeholder="Hospital ID" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setEmail(e.target.value)}} value={email} placeholder="Email" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setLandline(e.target.value)}} value={landline} placeholder="Landline" />
          </div>
          <div className="signbtn2">
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signupcomp;
