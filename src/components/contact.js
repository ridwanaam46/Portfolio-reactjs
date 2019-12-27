import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col="6">
            <h2>Muhammad Ridwan</h2>
            <img alt="contact" style={{height:'200px'}} src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"></img>
            <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            </p>
          </Cell>
          <Cell col="6">
          <h2>Contact Me</h2>
          <hr/>
          <div className="contact-list">
            <List style={{justifyContent:'center', marginLeft:'10%', marginTop:'10%'}}>
            
              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Oxygen'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"></i>
                  0812-7068-1704
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Oxygen'}}>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  Ridwanaam
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Oxygen'}}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                    Muhammadridwanaam46@gmail.com
                </ListItemContent>
              </ListItem>
            </List>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;