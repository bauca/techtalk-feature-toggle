import React from "react";
import { Grid, Cell } from "react-mdl";
import { useFlag } from '@unleash/proxy-client-react';

const Homepage = () => {
    const enabled = useFlag('homepage'); 
    if(enabled) {
      return (
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="homepage-grid">
            <Cell col={12}>
              <div className="profile-img-border">
                <img
                  className="profile-img"
                  src="images/pttm.jpg"
                  alt="Pedal to the metal"
                />
              </div>
              <div className="banner-text">
                <h1>Pedal to the Metal feature toggle techtalk ENABLED</h1>
                <hr />
                <p>
                  Learning about releasing features without having to deploy! ENABLED
                </p>
              </div>
            </Cell>
          </Grid>
        </div>
      )
    }
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/pttm.jpg"
                alt="Pedal to the metal"
              />
            </div>
            <div className="banner-text">
              <h1>Pedal to the Metal feature toggle techtalk DISABLED</h1>
              <hr />
              <p>
                Learning about releasing features without having to deploy! DISABLED
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
}


export default Homepage;
