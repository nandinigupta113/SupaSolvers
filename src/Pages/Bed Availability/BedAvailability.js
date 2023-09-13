import React, { useState, useEffect, useRef } from "react";
import "./BedAvailability.css";
import Hosprefimg from "../../Assets/hosprefimg.png";
import Navbar from "../../Components/Navbar/Navbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "@mui/material/Select";
import { useLocation } from "react-router";
import axios from "axios";

const BedAvailability = () => {
  const location = useLocation();

  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);
  const otp4Ref = useRef(null);
  const otp5Ref = useRef(null);
  const otp6Ref = useRef(null);

  const [, setOtp1] = useState("");
  const [, setOtp2] = useState("");
  const [, setOtp3] = useState("");
  const [, setOtp4] = useState("");
  const [, setOtp5] = useState("");
  const [, setOtp6] = useState("");

  const [pin1, setPin1] = useState([""]);
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");

  const [verified, setVerified] = useState("");
  const [store, setStore] = useState("");
  // const [hospid, setHospid] = useState(location.state.hospid);
  const [bedtype, setBedtype] = useState("");
  const [result, setResult] = useState();
  const [useremailid, setUseremailid] = useState("");
  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");
  const [aadharno, setAadharno] = useState("");
  const [open, setOpen] = React.useState(false);
  // const [price, setPrice] = React.useState(0);
  // const [btnactive, setBtnactive] = useState(true);
  // const [otp,setOtp] = useState('');
 const {hospid} = location.state.hospid;
 const {btnactive} = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlebedtype = (event) => {
    setBedtype(event.target.value);
  };

  useEffect(() => {
    // const data = {
    //   Id: hospid,
    // };

    axios
      .get(`${process.env.REACT_APP_API}hospital/${hospid}`)
      .then((res) => {
        setResult(res.data.result[0]);
        // console.log(res.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleVerify = () => {
    let value =
      parseInt(pin1) * 100000 +
      parseInt(pin2) * 10000 +
      parseInt(pin3) * 1000 +
      parseInt(pin4) * 100 +
      parseInt(pin5) * 10 +
      parseInt(pin6);

    const data = {
      bookingId: store.bookingId,
      bedId: store.bedId,
      hosEmail: store.hosEmail,
      hosName: store.hosName,
      OTP: value,
    };
    // console.log(data);
    axios
      .put(`${process.env.REACT_APP_API}bed/bookingbed/verify`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data === "your bed has been booked") {
          console.log("Hurrah");
          // setStore("");
          setVerified("done");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Enter correct OTP");
      });
  };



  const handlebedbooking = () => {
    setVerified("");
    setPin1("");
    setPin2("");
    setPin3("");
    setPin4("");
    setPin5("");
    setPin6("");
    handleClickOpen();
    
    const data2 = {
      patientName: username,
      email: useremailid,
      Adhar: aadharno,
      age: parseInt(userage),
      type: bedtype,
      price:
        bedtype === "General"
          ? result.generalType.pricePerbad
          : result.generalType.pricePerbad,
    };
     
    // console.log(data2);
    axios
      .put(`${process.env.REACT_APP_API}bed/booking/${hospid}`, data2)
      .then((res) => {
        setStore(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.data === "adhar is already exist") {
          toast.error("Bed has been already booked with this aadhar no.");
        } else {
          toast.error("Enter valid details");
        }
      });
  };

  return (
    <div className="BedAvailability">
      <Navbar defaulth={"Hospitals Nearby"} />
      <div className="availablesec">
        {
          <div className="secdiv1">
            <img src={Hosprefimg} alt=""></img>
          </div>
        }
        <div className="secdiv2">
          <div className="titlehosp">
            {result && <span>{result.hospitalId[0].name}</span>}
            {!result && <span>Loading...</span>}
          </div>
          <div className="loc">
            <span>Location:</span>
            {!result && <span className="ans">Loading...</span>}
            {result && <span className="ans">{result.hospitalId[0].city}</span>}
          </div>
          <div className="ContactNo loc">
            <span>Contact No:</span>
            {!result && <span className="ans">Loading...</span>}
            {result && (
              <span className="ans">{result.hospitalId[0].mobileNum}</span>
            )}
          </div>
          <div className="otherfacility loc">
            <span className="loc">Other Facility:</span>
            {!result && <span className="ans">Loading...</span>}
            {result && <span className="ans">{result.otherFacilities}</span>}
          </div>
          <div className="BedsAvailable loc">
            <span>Beds Available:</span>
            {!result && <span className="ans">Loading...</span>}
            {result && (
              <span className="ans">
                {result.generalType.availbility}(General) +{" "}
                {result.specialType.availbility}(Special)
              </span>
            )}
          </div>
          <div className="BedsPrice loc btype">
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
          <div className="BedsPrice loc btype">
            <div className="inprice">
              <span>Price For Bed:</span>
              {result && bedtype === "General" && (
                <span className="blankspace ans">
                  &#8377;{result.generalType.pricePerbad}
                </span>
              )}
              {result && bedtype === "Special" && (
                <span className="blankspace ans">
                  &#8377;{result.specialType.pricePerbad}
                </span>
              )}
              {bedtype === "" && <div className="blankspace ans">XXX</div>}
            </div>
            <div className="loc">
              <span>Aadhar Card No:</span>
              <input
                className="ans xxx"
                type="number"
                minLength={12}
                maxLength={12}
                value={aadharno}
                onChange={(e) => {
                  setAadharno(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div className="loc">
            <span>Patient Name:</span>
            <input
              className="ans xxx"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <span>Patient Age:</span>
            <input
              className="ans xxx"
              type="number"
              value={userage}
              onChange={(e) => {
                setUserage(e.target.value);
              }}
            ></input>
          </div>

          <div className="ContactNo loc">
            <span>Enter your Email Id:</span>
            <input
              type="email"
              className="ans"
              value={useremailid}
              onChange={(e) => {
                setUseremailid(e.target.value);
              }}
            ></input>
          </div>

          <div className="bookbed">
            
        {!btnactive && <Button variant="contained"
         sx={{ marginTop: "2vh", fontSize: "1.5rem", width: "30vw" }}
        disabled>
          Book a bed
        </Button>}

            {btnactive && <Button
              onClick={handlebedbooking}
              variant="contained"
              sx={{ marginTop: "2vh", fontSize: "1.5rem", width: "30vw" }}
            >
              Book a Bed
            </Button>}

          </div>

          {verified !== "done" && store !== "" && (
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Enter OTP sent to Email Id </DialogTitle>
              <DialogContent>
                <div className="otpfields">
                  <input
                    ref={otp1Ref}
                    maxLength={1}
                    value={pin1}
                    onChange={(e, otp1) => {
                      setPin1(e.target.value);
                      setOtp1(otp1);
                      if (otp1 !== "") {
                        otp2Ref.current.focus();
                      }
                    }}
                  ></input>
                  <input
                    ref={otp2Ref}
                    maxLength={1}
                    value={pin2}
                    onChange={(e, otp2) => {
                      setPin2(e.target.value);
                      setOtp2(otp2);
                      if (otp2 !== "") {
                        otp3Ref.current.focus();
                      }
                    }}
                  ></input>
                  <input
                    ref={otp3Ref}
                    maxLength={1}
                    value={pin3}
                    onChange={(e, otp3) => {
                      setOtp3(otp3);
                      setPin3(e.target.value);
                      if (otp3 !== "") {
                        otp4Ref.current.focus();
                      }
                    }}
                  ></input>
                  <input
                    ref={otp4Ref}
                    maxLength={1}
                    value={pin4}
                    onChange={(e, otp4) => {
                      setOtp4(otp4);
                      setPin4(e.target.value);
                      if (otp4 !== "") {
                        otp5Ref.current.focus();
                      }
                    }}
                  ></input>
                  <input
                    ref={otp5Ref}
                    maxLength={1}
                    value={pin5}
                    onChange={(e, otp5) => {
                      setOtp5(otp5);
                      setPin5(e.target.value);
                      if (otp5 !== "") {
                        otp6Ref.current.focus();
                      }
                    }}
                  ></input>
                  <input
                    ref={otp6Ref}
                    maxLength={1}
                    value={pin6}
                    onChange={(e, otp6) => {
                      setPin6(e.target.value);
                      setOtp6(otp6);
                    }}
                  ></input>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleVerify}>verify</Button>
              </DialogActions>
            </Dialog>
          )}

          {verified !== "" && (
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Your bed has been successfully booked!</DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>Okay</Button>
              </DialogActions>
            </Dialog>
          )}
        </div>
      </div>
      {/* <Support/>
      <Footer/> */}
      <ToastContainer />
    </div>
  );
};

export default BedAvailability;
