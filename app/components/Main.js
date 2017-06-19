import React from "react";

// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;


// Import sub-components
import Form from "./children/Form";
import History from "./children/History";

// Helper Function
import helpers from "./utils/helpers";

class Main extends React.Component {

    render() {

        return (

            <div className="container-fluid">
                <div className="col-sm-12 title">
                    <h1>New York Times Search</h1>
                </div>

                <div>
                    <p>
                        <Link to="/Form"><button className="btn btn-primary btn-lg">Search</button></Link>
                        <Link to="/History"><button className="btn btn-danger btn-lg">Show Saved Articles</button></Link>
                    </p>
                </div>

                <div className="row">

                    {/* This code will dump the correct Child Component */}
                    {this.props.children}

                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Main;