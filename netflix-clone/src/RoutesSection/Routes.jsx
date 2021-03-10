import React from 'react'
import {Route, Switch} from "react-router-dom"
import HomePage from '../Pages/HomePage'
import LandingPage from '../Pages/LandingPage'
function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component = {LandingPage} />
                <Route path="/home" component = {HomePage} />
            </Switch>
        </div>
    )
}

export default Routes
