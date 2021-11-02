import Brand from "./Brand";
import React from 'react'
import CarDetails from './CarDetails'
import CarComparison from './CarComparison'
import { Route, Switch } from "react-router-dom"
import Home from './Home'

const Start = () => {
    return (
      // <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/cardetails">
                <CarDetails /> 
            </Route>
            <Route path="/compare">
                <CarComparison />
            </Route>
            <Route path="/brand">
                <Brand />
            </Route>
        </Switch>
      // </Router>
    )
}

export default Start;