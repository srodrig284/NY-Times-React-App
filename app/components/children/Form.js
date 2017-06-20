// Include React
import React from "react";

// Helper Function
import helpers from "../utils/helpers";

import Results from "./Results";


// Creating the Form component
class Form extends React.Component
{

    // Here we set a generic state associated with the text being searched for
    constructor(props){

        super(props);

        this.state = {
            searchTerm: "",
            startYear: "",
            endYear: "",
            results: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This function will respond to the user input
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        console.log("Got to handleChange");
        this.setState({
            [name]: event.target.value
        });
    }

    // When a user submits...
    handleSubmit(event) {
        event.preventDefault();
        console.log('got to handlesubmit');
        console.log('searchTerm = ', this.state.searchTerm);

        // Set the parent to have the search term
        /*this.props.setSearchTerm(this.state.searchterm);
        this.props.setStartYear(this.state.startYear);
        this.props.setEndYear(this.state.setEndYear);
        this.props.setResults(this.state.setResults);*/

        this.setState({results: []});
        helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function (data) {
            if (data !== this.state.results) {
                console.log("data = ", data);
                for (var i = 0; i < 4; i++) {
                    var newResults = {head: data[i].headline.main, url:data[i].web_url};
                    // Pushes to results array
                    this.setState({results: this.state.results.concat(newResults)});
                }
            }
        }.bind(this));
        this.setState({searchTerm: "", startYear: "", endYear: ""});
    }


    getClick(todo) {
        helpers.postSaved(todo.head, todo.url).then(function () {
            // After we've done the post... then get the updated Saved
            /*helpers.getSaved().then(function (response) {
                this.setState({Saved: response.data});
                console.log('Saved', this.state.Saved);
            }.bind(this));*/
        }.bind(this));
    }

    // Here we describe this component's render method
    render() {
        return (
            <div>
                <div className="col-sm-12 parameters">
                    <h3>Search Parameters</h3>
                </div>

                <div className="col-sm-12 search">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        {/*Search*/}
                            <label>
                                Search Term:
                                <input
                                    name="searchTerm"
                                    value={this.state.searchTerm}
                                    type="text"
                                    className="form-control text-center"
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="form-group">
                            {/*start year*/}
                            <label>
                                Start Year:
                                <input
                                    name="startYear"
                                    value={this.state.startYear}
                                    type="text"
                                    className="form-control text-center"
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="form-group">
                            {/*end year*/}
                            <label>
                                End Year:
                                <input
                                    name="endYear"
                                    value={this.state.endYear}
                                    type="text"
                                    className="form-control text-center"
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            {/*<Glyphicon glyph="glyphicon-search" aria-hidden="true"/>*/}
                            Submit
                        </button>
                    </form>
                </div>
                <Results results={this.state.results} getClicked={this.getClick}/>
                {/*<Results results={this.state.results}/>*/}
            </div>
        );
    }
}

// Export the component back for use in other files
export default Form;