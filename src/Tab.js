import React, { useState } from 'react';
import InfoForm from './InfoForm';
import background from "./images/bg-vector-img.png";
import user from "./images/user-img.png";
import logo from './images/logo.png';
import chevron from './images/chevron-icon.png';
const Tab = () => {
    const[active,setactive] = useState(false);
     const myStyle={
        backgroundImage: `url(${background})`,
    };
    const activetabs = ()=>{
        console.log('activetabs');
    }
    return (
    <>
    <div className='account_user'>
        <div className='ac_heading'>
          <h2>Account</h2>
          <img src={logo} className="mobile_logo" />
        </div>
        <div className='ac_user'>
          <div className='user_name_img'>
              Hi Dana, <img src={user} className='' />
          </div>
        </div>
    </div>
    <div className='ac_details' style={myStyle}>
       
    <div className="tabs">   
    <h3 className='ac_title_m'>Account</h3>
     <ul>
         <li className="active" onClick={()=>setactive(true)}>Profile Information</li>
         <li>Change Password</li>
     </ul>
     </div> 

     <div className= {active ? 'pro_info active':'pro_info'} >
         <div className= 'under_pro_info'>
             <h2 onClick={()=>setactive(false)}><img src={chevron} className="chevron-icon"/> Profile Information</h2>
             <InfoForm />
         </div>
     </div>
     </div>
    </>
    );
}

export default Tab;