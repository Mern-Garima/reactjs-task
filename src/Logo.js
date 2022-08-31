import logo from './images/logo.png';
import assignment from './images/assignment-nav.png';
import chat_icon from './images/chat_icon.png';
import { ReactDOM } from 'react';
import React from 'react';


const Logo = () => {
    return (
      <>
      <div className='left_detail'>
      <div className='top_left'>
        <img src={logo} className="logo" /> 
        <div className='assign_img'>
            <img src={assignment} className="assignment-nav" />
        </div>
       </div>
       <div className='left_bottom'>
            <img src={chat_icon} className="chat_icon" />
       </div>
       </div>
      </>
    );
  }
  
  export default Logo;
  