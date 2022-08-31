import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import React, { useEffect, useState } from 'react';

import Logo from './Logo';
import Tab from './Tab';


const App = () => {
  return (
    <>
    <div className='main_dashboard'>
      <div className='logo_main'>
         <Logo />
      </div>
      <div className='account_side'>
        <Tab />
      </div>
    </div>
    </>
  );
}

export default App;
