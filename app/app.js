// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
// Grabs the Routes
//var routes = require("./config/routes");
import routes from "./config/routes";

// Include the Main Component
import Main from "./components/Main";

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(routes, document.getElementById("app"));