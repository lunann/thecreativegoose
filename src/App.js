import React from 'react'
import MainContent from "./MainContent"
import Sections from "./Sections"
import Hyperlinks from "./Hyperlinks"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from "./About"
import MyWork from "./MyWork"

function App () {
    return (
        <Router>
            <div>
            <Hyperlinks/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/mywork" component={MyWork}/>
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <MainContent/>
        <Sections/>
    </div>
);

export default App
