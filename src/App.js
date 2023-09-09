import "./App.css";
import Home from "./Pages/Home/Home";
import Sign from "./Pages/userlogin/Sign";
import Info from './Pages/Info/Info';
import BedAvailability from "./Pages/Bed Availability/BedAvailability";
import HospitalsNearby from "./Pages/Hospitals Nearby/HospitalsNearby";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Updatebed from "./Pages/Updatebed/Updatebed";
import District from "./Pages/Districtwise/District";
import { useEffect, useState } from "react";
import Mobile from "./MobileError/Mobile";

function App() {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(orientation:portrait)").matches) {
      setMobile(false);
    } else if (window.innerWidth < "1000") {
      setMobile(false);
    }
  }, []);

  return mobile === true ? <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Sign" element={<Sign/>} />
      <Route path="/Info" element={<Info/>} />
      <Route path="/HospitalsNearby" element={<HospitalsNearby/>} />
      <Route path="/bedavailability" element={<BedAvailability/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Updatebed" element={<Updatebed/>} />
      <Route path="/districtwise" element={<District/>} />
    </Routes>
  </BrowserRouter>
</div> : <Mobile />;
}

export default App;
