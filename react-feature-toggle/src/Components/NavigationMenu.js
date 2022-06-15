import React from "react";
import { useFlag } from '@unleash/proxy-client-react';
import { Link } from 'react-router-dom';
import {  Navigation } from "react-mdl";


const NavigationMenu = () => {
    const enabled = useFlag('menutoggle'); 
    console.log(enabled)
    if(enabled) {
    return (
      <Navigation>
          <Link to="/">Home</Link>
          <Link to="/Aboutme">About me</Link>
          <Link to="/Contact">Contact</Link>
      </Navigation>
      )
    }
    return (
      <Navigation>
          <Link to="/Aboutme">About me</Link>          
      </Navigation>
    )
}

export default NavigationMenu;
