// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NY Times API
var apiKey = "247c5455a1e04df0a47785c833eb1fc2";

// Helper functions for making API Calls
var helper = {

    // This function serves our purpose of running the query to geolocate.
    runQuery: function(title, startyear, endyear) {
        var startYear = startyear + "0101";

        var endYear = endyear + "1231";

        var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${title}&begin_date=${startYear}&end_date=${endYear}`;

        console.log("nytimes url = ", url);

        return axios.get(url).then(function(response) {
            var articles = response.data.response.docs;
            // If get get a result, return that result's formatted address property
            if (articles) {
                return articles;
            }
            // If we don't get any results, return an empty string
            return "";
        });
    },

    // This function hits our own server to retrieve the record of query results
    getSaved: function() {
        return axios.get("/api");
    },

    // This function posts new searches to our database.
    postSaved: function(Title, Url) {
        return axios.post("/api", { title: Title, url: Url });
    }
};

// We export the API helper
module.exports = helper;