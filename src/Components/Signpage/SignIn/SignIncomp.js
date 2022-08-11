import React,{useState} from 'react'
import "./SignIncomp.css"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const SignIncomp = () => {

  const [userId,setUserId] = useState("");
  const [psswd,setPsswd] = useState("");
  
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
                <input onChange={(e) => {setUserId(e.target.value)}} value={userId} placeholder="User Id" />
              </div>
              <div className="text1">
                <span></span>
                <input onChange={(e) => {setPsswd(e.target.value)}} value={psswd} placeholder="Password" />
              </div>
              <div className="signbtn">
                <button>Sign In</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SignIncomp