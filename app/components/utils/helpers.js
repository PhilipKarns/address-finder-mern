var axios = require("axios");

var geocoderAPI = "ae0906725b42406cabf5ced02643f15a";

var helper = {
	runQuery: function(location) {
		console.log(location);

		var queryURL = "http://api.opencagedata.com/geocode/v1/json?query="	+ location + "&pretty=1&key=" + geocoderAPI;
		console.log(queryURL);
		return axios.get(queryURL).then(function(response) {
			if(response.data.results[0]) {
				return response.data.results[0].formatted;
			}
			//if no result returned, return empty string
			return "";
		});
	},
	getHistory: function() {
		return axios.get("/api");
	},
	//receive the search term and then pass it to the server
	postHistory: function(location) {
		return axios.post("/api", {
			location: location
		});
			console.log("Search term has been sent to the server");
	}
};

module.exports = helper;