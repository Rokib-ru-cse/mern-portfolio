import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import Project from './components/Project' 
import Skill from './components/Skill' 
import Education from './components/Education' 

function index() {
    return (
        <>
            <Header />
            <Switch>
                <Route path='/project' component={Project} />
                <Route path='/skill' component={Skill} />
                <Route path='/education' component={Education}/>
                <Route path='/' component={Home}/>

            </Switch>

            <Footer />
        </>
    )
}

export default index
