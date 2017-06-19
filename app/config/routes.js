/*// Inclue the React library
import React from "react";

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;*/

import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

// Reference the high-level components
/*var Main = require("../components/Main");
var Form = require("../components/children/Form");
var Results = require("../components/children/Results");
var History = require("../components/children/History");*/

import Main from "../components/Main";
import Form from "../components/children/Form";
import Results from "../components/children/Results";
import History from"../components/children/History";

// Export the Routes
let routes = (

    // The high level component is the Router component
    <Router history={browserHistory}>

        <Route path="/" component={Main}>

            {/* If user selects Form then show the appropriate component*/}
            <Route path="Form" component={Form}>

                <Route path="Results" component={Results} />
            </Route>

            {/* If user selects History then show the appropriate component*/}
            <Route path="History" component={History} />


        </Route>
    </Router>
);
// Export the component back for use in other files
export default routes;