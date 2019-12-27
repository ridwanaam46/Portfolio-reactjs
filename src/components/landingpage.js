import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing  extends Component{
    render() {
return(
    <div style={{width: '100%', margin: 'auto'}}>
        <Grid className='Landing-Grid'>
            <Cell col='12'>
                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                alt="avatar" 
                className="avatar-img"/>

                <div className="banner-text">
                    <h1>Front End Developer</h1>
                        <hr/>
                <p>HTML/CSS | Bootstrap | Reactjs | UI </p>
                <div className="Social-Media">
                    {/* Linkedin */}
                   <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                   </a>
                   {/* Github */}
                   <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-github-square"  aria-hidden="true"/>
                   </a>
                   {/* youtube */}
                   <a href="http://google.com"  rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-youtube-square" aria-hidden="true"/>
                   </a>
                
                </div>

                </div>
            </Cell>
        </Grid>
    </div>
        )
    }
}
export default Landing;