import React, {useState} from "react";
import "./Signupcomp.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Signupcomp = () => {
  const navigate = useNavigate();
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [psswd, setPsswd] = useState("");
  // const [hospitalId, setHospitalId] = useState("");
  const [hospitaltype, setHospitaltype] = useState("");
  const [pincode, setPincode] = useState("");
  const [ans, setans] = useState(false);
  // let token;
  const handlesignup = (e) =>{
    e.preventDefault();
    setans(true);
    const data = {
      name: hospitalName,
      email: email,
      mobileNum:phone,
      password:psswd,
      address:address,
      state:state,
      city:city,
      pincode:pincode,
      hospitaltype:hospitaltype
    }
    axios.post(`${process.env.REACT_APP_API}register`,data)
    .then((res) => {
      console.log(res.data);
      if(res.data.token){     
        setans(false);
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("_id",res.data.save._id);
        navigate('/Info');
      }
    })
    .catch((err) => {
      setans(false);
      console.log(err);
      toast.error('Enter valid details');
    })
  }


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
        <div className="outerlayer">
        <div className="Userbox2">
          <div className="text2" id="textt">
            <span></span>
            <input onChange={(e) => {setHospitalName(e.target.value)}} value={hospitalName} placeholder="Hospital Name" />
          </div>
          <div className="text2in" id="text">
            <div className="ht">Hospital Type</div>
            <div className="rradio">
              <div>
                <input onChange={(e) => {setHospitaltype(true)}}  type="radio" value="governmenttype" name="ht" />
                <label htmlFor="governmenttype">Government</label>
              </div>
              <div>
                <input onChange={(e) => {setHospitaltype(false)}}  type="radio" value="privatetype" name="ht" />
                <label htmlFor="privatetype">Private</label>
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
            <input onChange={(e) => {setPincode(e.target.value)}} value={pincode} placeholder="Pin code" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setEmail(e.target.value)}} value={email} placeholder="Email" />
          </div>
          <div className="text2">
            <span></span>
            <input onChange={(e) => {setPsswd(e.target.value)}} value={psswd} placeholder="Password" />
          </div>
          <div className="signbtn2">
            {ans ? <button onClick={handlesignup}><CircularProgress color="inherit"/></button> : <button onClick={handlesignup}>Sign Up</button>}
      </div>
        </div>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signupcomp;
