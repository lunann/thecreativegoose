import React from 'react'
import MainContent from "./Components/MainContent"
import Hyperlinks from "./Components/Hyperlinks"
import Project from './Components/Project'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import About from "./Components/About"
import MyWork from "./Components/MyWork"
import Oups from "./Components/Oups"
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