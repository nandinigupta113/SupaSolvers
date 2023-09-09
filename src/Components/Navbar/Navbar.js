import React,{useState} from 'react'
import './Navbar.css'
import PageviewIcon from '@mui/icons-material/Pageview';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import logo from '../../Assets/SSlogo.png'
import { useNavigate } from "react-router-dom";
import Home from '../../Pages/Home/Home';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import axios from 'axios';
import DialogTitle from '@mui/material/DialogTitle';
const Navbar = ({defaulth}) => {
 const navigate = useNavigate();


//  const [open, setOpen] = React.useState(false);
//  const [email, setEmail] = React.useState("");
//  const [hh, setHh] = React.useState("");

//  const handleClickOpen = () => {
//    setOpen(true);
//  };

//  const handleClose = () => {
//    setOpen(false);
//  };



//  const handleOkay = () =>{
//   setHh("yup");
//   handleClose();

//  }



//  const handleEmailSubmit =() =>{
//   const data = {
//     "email" : email
//   }
//   axios.post('https://sih-23.herokuapp.com/bad/patient/bookingbads',data)
//   .then((res) => {
//     console.log(res.data);
//     if(res.data){
//       setHh("yup");
//       handleClose();

//     }
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
//  }


  return (
    <div className='Navbar'>
         <div className='header'>
        <div className='logo'>
          <img className='logoin' src={logo}/>
        </div>
        <div className='head'>
          <button className={defaulth === 'Home'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/');}} value="Home">Home</button>
          <button className={defaulth === 'Hospitals Nearby'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/hospitalsnearby');}} value="Hospitals Nearby">Beds Availability</button>
          {/* <button className={pgchoice === 'Bed Availability'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => { handleChoice(e.target.value); navigate('/bedavailability');}} value="Bed Availability">Bed Availability</button> */}
          {/* <button className={defaulth === 'Bed Status'? 'selectedpgchoice' : 'onlychoice'} onClick={handleClickOpen} value="Bed Status">Bed Status</button> */}
          <button className={defaulth === 'UserLogin'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/sign');}} value="Login">SignIn/SignUp</button>
          {/* <PageviewIcon  color="primary" sx={{cursor:'pointer', height:"3rem",width:"3rem"}} /> */}
          <div className='location'>
          {/* <span><PlaceOutlinedIcon sx={{cursor:'pointer',marginTop:'0.4rem', height:"1.7rem",width:"2rem"}}/></span>
          <span>24/7</span> */}
          <span style={{color:'black'}}>Emergency</span>
          <AddBoxIcon sx={{color:"white"}}/>



{/* 

        {hh !== 'yup' &&  <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Check your book bed Status</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>


        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          {/* <Button onClick={handleEmailSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>} */}

      {/* {hh === 'yup' && <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Check your book bed Status</DialogTitle>
      <Button onClick={handleOkay}>Okay</Button>
      <DialogContent>
        
      </DialogContent>
    </Dialog>} */} 




          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar