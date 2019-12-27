import React from 'react';
import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import Project from './project';
import Resume from './resume';

const Main = () => (
    <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/project" component={Project}/>
            <Route path="/resume" component={Resume}/>
    </Switch>
)
export default Main;