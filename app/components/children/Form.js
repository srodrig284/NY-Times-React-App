// Include React
import React from "react";

// Import sub-components
import Results from "./Results";

// Creating the Form component
class Form extends React.Component
{
    // Here we set a generic state associated with the text being searched for
    constructor(props){
        super(props);
        this.state = {
            term: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This function will respond to the user input
    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    // When a user submits...
    handleSubmit(event) {
        event.preventDefault();
        // Set the parent to have the search term
        this.props.setTerm(this.state.term);
        this.setState({term: "", startYear: "", endYear: ""});
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
            </div>
        );
    }
};

// Export the component back for use in other files
export default Form;