import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skill from './skill';


class Resume extends Component{
  render(){
    return(
      <Grid className="grid-resume">
        <Cell className="col-left" col="4">
            <div className="profil">
              <img className="avatar" alt="contact" style={{height:'200px'}} src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"/>
            </div>
           <h1>Muhammad Ridwan</h1>
              <h3>Front End Developer</h3>
              <hr/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
        </Cell>
        <Cell className="col-right" col="8">
          <h3>Education</h3>
          <Education 
          startYear={2012}  
          endYear={2015}
          schoolName="SMA N 2 Padang"
          schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <Education 
          startYear={2015}  
          endYear={2019}
          schoolName="Telkom University"
          schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <hr style={{width:'80%', margin:'auto'}}/> 
          <h3>Skill</h3>
          <Skill
          skillName="Front End Developer"
          progress={50}
          />
           <Skill
          skillName="Scrum Masterr"
          progress={40}
          />
           <Skill
          skillName="Ui Design"
          progress={50}
          />
           <Skill
          skillName="System Analyst"
          progress={45}
          />
        </Cell>
        
      </Grid>
    )
  }
}
export default Resume;
