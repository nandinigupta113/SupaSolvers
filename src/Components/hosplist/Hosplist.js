import React from 'react';
import './Hosplist.css';
import { useNavigate } from "react-router-dom";
const Hosplist = ({email,name, mobilenum, city}) => {
    const navigate = useNavigate();
  return (
    <div className='Hosplist'>
        <div className='inHosplist'>
            <div className='hosplistimg'>
               <img src='https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80'></img>
            </div>
           <div className='hosplisttxt'>
            <div className='hosplisttitle'>
                <span key={name}>{name}</span>
            </div>
            <div className='shorttxt'>
                <div className='line'>
                    <span>Contact No:</span>
                    <span key={mobilenum} className='bluetxt'>{mobilenum}</span>
                </div>
                <div className='line'>
                    <span>Email:</span>
                    <span key={email} className='bluetxt'>{email}</span>
                </div>
                <div className='line'>
                    <span>Area:</span>
                    <span key={email} className='bluetxt'>{city}</span>
                </div>
              
            </div>
            
           </div>
           <div className='moreinfo'>
                 <span onClick={(e) => {e.preventDefault(); navigate('/bedavailability')}}>More Information &#11166;</span>
            </div>
        </div>
       
    </div>
    
  )
}

export default Hosplist