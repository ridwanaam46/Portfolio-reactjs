import React, {Component} from 'react';
import {Tabs, Tab, Cell, Grid,Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Select from 'react-select';

const options = [
    { value: 'Front End Developer', label: 'Front End Developer' },
    { value: 'UI Design', label: 'UI Design' },
    { value: 'Scrum Master', label: 'Scrum Maste' },
    { value: 'System Analyst', label: 'System Analyst' },
   
  ];

class Project extends Component{
    state = {
        selectedOption: null,
        
      };
      handleChange = selectedOption => {
        this.setState(
          { selectedOption },
          () => console.log(`Option selected:`, this.state.selectedOption)
        );
      };

constructor(props){
    super(props);
    this.state = {activeTab: 0};
}




render() {
    
    return (
        
        
            <div className="catagory-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(TabId) => this.setState({activeTab: TabId})} ripple  >
                    <Tab>React</Tab>
                    <Tab>Front End</Tab>
                    <Tab>UI Design</Tab>
                    <Tab>Vue jS</Tab>
                    <Tab>Gadjian</Tab>
                </Tabs>

          {/* Tab Section */}
                
                    <Grid>
                        <Cell col={12}>
                    <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                        </Grid> 
                    
               
            </div>

            
    )
}

toggleCategories(){
    const { selectedOption } = this.state;
    if(this.state.activeTab === 0){
        return(
            <div className="project-grid">
                {/*Project1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white' , height: '176px', background: 'url(https://miro.medium.com/max/3150/1*jDIj2SKAE-Bp32owLoHDjw.png) center /cover'}}>
                    ReactJs Portofolio #1
                    </CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </CardText>
                <CardActions border className="card-button">
                <Button color >Github</Button>
                <Button color>Drive</Button>
                <Button color>Youtube</Button>
                </CardActions>
                <CardMenu>
                    <IconButton  name="share" style={{color:'white'}}></IconButton>
                </CardMenu>
            </Card>

             {/*Project2 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white' , height: '176px', background: 'url(https://miro.medium.com/max/3150/1*jDIj2SKAE-Bp32owLoHDjw.png)center /cover'}}>
                   Open Data #2
                    </CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </CardText>
                <CardActions border className="card-button">
                <Button color>Github</Button>
                <Button color>Drive</Button>
                <Button color>Youtube</Button>
                </CardActions>
                <CardMenu>
                    <IconButton name="share" style={{color:'white'}}></IconButton>
                </CardMenu>
            </Card>

             {/*Project3 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white' , height: '176px', background: 'url(https://miro.medium.com/max/3150/1*jDIj2SKAE-Bp32owLoHDjw.png)center /cover'}}>
                    React Project #3
                    </CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </CardText>
                <CardActions border className="card-button">
                <Button color>Github</Button>
                <Button color>Drive</Button>
                <Button color>Youtube</Button>
                </CardActions>
                <CardMenu>
                    <IconButton name="share" style={{color:'white'}}></IconButton>
                </CardMenu>
            </Card>

            
            </div>
        )
    }else if(this.state.activeTab === 1){
       return(
        <div className="project-grid">
        {/*Project1 */}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'white' , height: '176px', background: 'url(https://miro.medium.com/max/3150/1*jDIj2SKAE-Bp32owLoHDjw.png) center /cover'}}>
            React Project #1
            </CardTitle>
        <CardText>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </CardText>
        <CardActions border className="card-button">
        <Button color >Github</Button>
        <Button color>Drive</Button>
        <Button color>Youtube</Button>
        </CardActions>
        <CardMenu>
            <IconButton  name="share" style={{color:'white'}}></IconButton>
        </CardMenu>
    </Card>

     {/*Project2 */}
     <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'white' , height: '176px', background: 'url(https://miro.medium.com/max/3150/1*jDIj2SKAE-Bp32owLoHDjw.png)center /cover'}}>
            React Project #2
            </CardTitle>
        <CardText>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </CardText>
        <CardActions border className="card-button">
        <Button color>Github</Button>
        <Button color>Drive</Button>
        <Button color>Youtube</Button>
        </CardActions>
        <CardMenu>
            <IconButton name="share" style={{color:'white'}}></IconButton>
        </CardMenu>
    </Card>

     {/*Project3 */}
     <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'white' , height: '176px', background: 'url(https://miro.medium.com/max/3150/1*jDIj2SKAE-Bp32owLoHDjw.png)center /cover'}}>
            React Project #3
            </CardTitle>
        <CardText>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </CardText>
        <CardActions border className="card-button">
        <Button color>Github</Button>
        <Button color>Drive</Button>
        <Button color>Youtube</Button>
        </CardActions>
        <CardMenu>
            <IconButton name="share" style={{color:'white'}}></IconButton>
        </CardMenu>
    </Card>

    
    </div>
       )
    }else if(this.state.activeTab === 2){
        return(
            <div className="project-grid">
            {/*Project1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white' , height: '176px', background: 'url(https://miro.medium.com/max/3150/1*jDIj2SKAE-Bp32owLoHDjw.png) center /cover'}}>
                React Project #1
                </CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </CardText>
            <CardActions border className="card-button">
            <Button color >Github</Button>
            <Button color>Drive</Button>
            <Button color>Youtube</Button>
            </CardActions>
            <CardMenu>
                <IconButton  name="share" style={{color:'white'}}></IconButton>
            </CardMenu>
        </Card>

         {/*Project2 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white' , height: '176px', background: 'url(https://miro.medium.com/max/3150/1*jDIj2SKAE-Bp32owLoHDjw.png)center /cover'}}>
                React Project #2
                </CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </CardText>
            <CardActions border className="card-button">
            <Button color>Github</Button>
            <Button color>Drive</Button>
            <Button color>Youtube</Button>
            </CardActions>
            <CardMenu>
                <IconButton name="share" style={{color:'white'}}></IconButton>
            </CardMenu>
        </Card>

         {/*Project3 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white' , height: '176px', background: 'url(https://miro.medium.com/max/3150/1*jDIj2SKAE-Bp32owLoHDjw.png)center /cover'}}>
                React Project #3
                </CardTitle>
            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </CardText>
            <CardActions border className="card-button">
            <Button color>Github</Button>
            <Button color>Drive</Button>
            <Button color>Youtube</Button>
            </CardActions>
            <CardMenu>
                <IconButton name="share" style={{color:'white'}}></IconButton>
            </CardMenu>
        </Card>

        
        </div>
        )
     } else if(this.state.activeTab === 3){
        return(
            <div>
                <h1>Veujs</h1>
               
              </div>
        )

       
     }else if(this.state.activeTab === 4){
        return(
          
     <div className="select-option">
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
     </div>
     
           
           
        )

       
     }
}

  


    
}
export default Project;