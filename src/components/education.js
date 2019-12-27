import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Education extends Component{
    render(){
        return(
        <Grid className="education">
            <Cell col="4">
    <p>{this.props.startYear} - {this.props.endYear}</p>
            </Cell>
            <Cell col="8">
        <p>{this.props.schoolName}</p>
        <p>{this.props.schoolDescription}</p>
            </Cell>
        </Grid>
        )
    }
}
export default Education;