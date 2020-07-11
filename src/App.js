import React from 'react'
import MainContent from "./MainContent"
import Sections from "./Sections"
import Hyperlinks from "./Hyperlinks"
import Project from './Project'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import About from "./About"
import MyWork from "./MyWork"
import Oups from "./Oups"
import './fonts.css'

function App () {
    return (
        <Router>
            <div>
            <Hyperlinks/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/mywork" component={MyWork}/>
                    <Route path="/mywork/:projectId" component={Project}/>
                    <Route component = {Oups}/>
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <MainContent/>
    </div>
);

export default App

//renderProject = (routerProps) => {
//    let projectId = parseInt(routerProps.match.params.id)
//    let foundProject = this.state.projects.find(projectObj => projectObj.id === projectId)
//    return (foundProject ? <Project project={foundProject}/> : <Oups/>)
//}