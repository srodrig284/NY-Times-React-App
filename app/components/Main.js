import React from "react";

// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;


// Import sub-components
import Form from "./children/Form";

// Helper Function
import helpers from "./utils/helpers";

class Main extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            searchTerm: "",
            startYear: "",
            endYear: "",
            results: []
        };

        this.setTerm = this.setTerm.bind(this);
        this.setStartYear = this.setStartYear.bind(this);
        this.setEndYear = this.setEndYear.bind(this);
        this.setResults = this.setResults.bind(this);
    }

    componentDidMount() {
        // Get the latest Saved.
        helpers.getSaved().then(function (response) {
            if (response !== this.state.Saved) {
                this.setState({Saved: response.data});
            }
        }.bind(this));
    }

    // if the component changes
    componentDidUpdate(prevProps, prevState) {

        if (prevState.searchTerm !== this.state.searchTerm) {
            console.log("Got to DidUpdate");

            this.setState({results: []});
            helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then((data) => {
                if (data !== this.state.results) {
                    console.log('data', data[0].headline.main);

                    for (var i = 0; i < 4; i++) {
                        //Pushes information from api to results array
                        this.setState({results: this.state.results.concat(data[i].headline.main)});
                        //console.log(this.state.results);
                    }
                }
            });
        }
    }

    // allow children to update the parent
    setTerm(term) {
        this.setState({
            searchTerm: term
        });
    }

    // allow children to update the parent
    setStartYear(startyear) {
        this.setState({
            startYear: startyear
        })
    }

    // allow children to update the parent
    setEndYear(endyear) {
        this.setState({
            endYear: endyear
        })
    }

    setResults(results) {
        this.setState({
            results: results
        });
    }

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
                {/*<div className="col-sm-12 search">

                    <Form
                        setTerm={this.setTerm}
                        setStartYear={this.setStartYear}
                        setEndYear={this.setEndYear}
                        setResults={this.setResults}
                    />

                </div>*/}

               {/*<div className="container-second">
                    <div className="col-sm-12 articleHeader">
                        <h3>Top Articles</h3>
                    </div>
                    <div className="resultsArea">
                        <Results article={this.state.results} />
                    </div>
                </div>*/}

                {/*<div className="container-second">
                    <div className="col-sm-12 articleHeader">
                        <h3>Saved Articles</h3>
                    </div>
                    <div className="resultsArea">
                        <History article={this.state.results} />
                    </div>
                </div>*/}
            </div>
        );
    }
}

// Export the component back for use in other files
export default Main;