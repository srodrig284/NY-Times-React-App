// Include React
import React from "react";

// Creating the Results component
class Results extends React.Component{
    // Here we render the function
    render() {
        return (
            <div>
                <div className="col-sm-12 parameters">
                    <h3>Top Articles</h3>
                </div>
                <div className="resultsArea">
                    {/*Maps through the results array in the constructor*/}
                    {this.props.results.map((search, i) => {
                        return (
                            <p key={i}>
                                <a href={search.url} target="_blank">{search.head}</a>
                                <button className="o" onClick={this.props.getClicked.bind(this, search)} type="button btn-success">Save</button>
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Results;