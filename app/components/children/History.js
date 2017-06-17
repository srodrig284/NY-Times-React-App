// Include React
import React from "react";


// Creating the Results component
class History extends React.Component{
    // Here we render the function
    render() {
        return (
            <div>
                <div className="col-sm-12 parameters">
                    <h3>Top Articles</h3>
                </div>
                <div className="resultsArea">
                    {/* Here we use a map function to loop through an array in JSX */}
                    {this.props.Saved.map(function (search, i) {
                        return (
                            <div>
                                <a href={search.url} target="_blank" key={i}>{search.title} - {search.date}</a>
                                <button className="btn btn-danger">Delete</button>
                                <br/>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

// Export the component back for use in other files
export default History;