import React from "react";
import { useFlag } from '@unleash/proxy-client-react';

const Aboutme = () => {
   const enabled = useFlag('about_me')
   if(enabled) {
    return (
      <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Tech Talk about feature toggle ENABLED</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
          This is my about me content enabled via feature flag
        </p>
      </div>
    )
   }
   return (
    <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>
      <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Tech Talk about feature toggle DISABLED</h1>
      <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
        This is my about me content disabled via feature flag
      </p>
    </div>
  )
}

export default Aboutme;
