import React from "react";
import { ToastContainer, toast } from "react-toastify";
import './Mobile.css'
const Mobile = () => {
  toast.error("Open in Laptop/Desktop");
  return (
    <div>
      <div className="mobile_view">
        <ToastContainer />
      </div>
    </div>
  );
};

export default Mobile;