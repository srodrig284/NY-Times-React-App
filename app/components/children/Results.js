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
                                <div className="article-content" key={i}>
                                    <p className="article-title">
                                        {search.head}
                                    </p>
                                    <a className="url" href={search.url} target="_blank">{search.url}</a>
                                    <button className="btn btn-danger btn-sm" onClick={this.props.getClicked.bind(this, search)} type="button btn-success">Save</button>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Results;