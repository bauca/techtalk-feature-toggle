import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { useFlag } from '@unleash/proxy-client-react';

const Contact = () => {
    const enabled = useFlag('contact_me')
    if(enabled) {
    return (
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Pedal to The metal squad @ING</h2>
              <img style={{height: '250px'}} src="images/pttm.jpg" alt="avatar" />
              <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                The nicest squad @ING :)
              </p>
            </Cell>
            <Cell col={6}>
                <h2>Contact Us</h2>
                <hr />
                <div className="contact-list">                  
                <List>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-phone-square" aria-hidden='true'></i>+31 00000000</ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-envelope" aria-hidden='true'></i>fcoob@ing.com</ListItemContent>
                    </ListItem>
                </List>
                </div>
            </Cell>
          </Grid>
        </div>
      );
    }
    return (
      <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Pedal to The metal squad @ING</h2>
              <img style={{height: '250px'}} src="images/pttm.jpg" alt="avatar" />
              <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                The nicest squad @ING :) DISABLED
              </p>
            </Cell>
          </Grid>
        </div>
    )
}

export default Contact;
