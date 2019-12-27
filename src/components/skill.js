import React, {Component} from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skill extends Component{
    render(){
        return(
            <Grid className="grid-skill">
                <Cell col="3">
                    <div style={{display:"flex"}}>
                         {this.props.skillName} 
                    </div>
                </Cell>
                <Cell col="9">
                <div style={{display:"flex"}}>
                        <ProgressBar style={{margin:'auto', width:'75%'}} progress={this.props.progress}></ProgressBar>
                </div>
                </Cell>
            </Grid>
        )
    }
}
export default Skill;