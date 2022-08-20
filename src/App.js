import "./App.css";
import Home from "./Pages/Home/Home";
import Sign from "./Pages/userlogin/Sign";
import Info from './Pages/Info/Info';
import BedAvailability from "./Pages/Bed Availability/BedAvailability";
import HospitalsNearby from "./Pages/Hospitals Nearby/HospitalsNearby";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Sign" element={<Sign/>} />
          <Route path="/Info" element={<Info/>} />
          <Route path="/HospitalsNearby" element={<HospitalsNearby/>} />
          <Route path="/bedavailability" element={<BedAvailability/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
