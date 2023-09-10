import React,{useState} from 'react'
import "./SignIncomp.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';
import "react-toastify/dist/ReactToastify.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const SignIncomp = () => {
  const navigate = useNavigate();
  const [userId,setUserId] = useState("");
  const [psswd,setPsswd] = useState("");
  const [hospid,setHospid] = useState('');
  const [ans, setans] = useState(false);
  let token;
  const handlesignin = (e) => {
    setans(true);
    e.preventDefault();
    const data = {
      email:userId,
      password:psswd
    }
    axios.post(`${process.env.REACT_APP_API}login`,data)
    .then((res) => {
      console.log(res.data);
      if(res.data.cookie_token){
        setans(false);
        localStorage.setItem("token",res.data.cookie_token);
        localStorage.setItem("_id",res.data.hosId);
        navigate('/Dashboard');
      }
    })
    .catch((err) => {
      setans(false);
      console.log(err);
      toast.error('Enter correct details')
    })

  }
  return (
    <div className='SignIncomp'>
        <div className="userlogo">
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
            <div className="Userbox">
              <div className="text1" id="text">
                <span></span>
                <input onChange={(e) => {setUserId(e.target.value)}} value={userId} placeholder="Email Id" />
              </div>
              <div className="text1">
                <span></span>
                <input onChange={(e) => {setPsswd(e.target.value)}} value={psswd} placeholder="Password" />
              </div>
              <div className="signbtn">
              {ans ? <button onClick={handlesignin}><CircularProgress color="inherit"/></button> : <button onClick={handlesignin}>Sign In</button>}
              </div>
            </div>
          </div>
          <ToastContainer/>
    </div>
  )
}

export default SignIncomp