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

        this.setTerm = this.setTerm.bind(this);
        this.setStartYear = this.setStartYear.bind(this);
        this.setEndYear = this.setEndYear.bind(this);
        this.setResults = this.setResults.bind(this);

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
        this.setState({results: []});
        helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function (data) {
            if (data !== this.state.results) {
                this.setState({ results: data });
            }
        }.bind(this));
        this.setState({term: "", startYear: "", endYear: ""});
    }


    // if the component changes
    /*componentDidUpdate(prevProps, prevState) {
        console.log("Got to componentDidUpdate 1");

        if (prevState.searchTerm !== this.state.searchTerm) {
            console.log("Got to componentDidUpdate 2");

            helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then((data) => {
                if (data !== this.state.results) {
                    console.log(data);

                    this.setState({ results: data });
                }
            });
        }
    }*/

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

    /*getClick(todo) {
        helpers.postSaved(todo.head, todo.url).then(function () {
            // After we've done the post... then get the updated Saved
            helpers.getSaved().then(function (response) {
                this.setState({Saved: response.data});
                console.log('Saved', this.state.Saved);
            }.bind(this));
        }.bind(this));
    }*/

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
                                    name="term"
                                    value={this.state.term}
                                    type="text"
                                    className="form-control text-center"
                                    id="term"
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
                                    id="term"
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
                                    id="term"
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
                {/*<Results results={this.state.results} getClicked={this.getClick}/>*/}
                <Results results={this.state.results}/>
            </div>
        );
    }
};

// Export the component back for use in other files
export default Form;