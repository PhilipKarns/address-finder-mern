//dependencies
var React = require("react");

var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");

var helpers = require("./utils/helpers");

var Main = React.createClass({
	getInitialState: function() {
		return {
			searchTerm: "",
			results: "",
			history: []
		}
	},
	setTerm: function(term) {
		this.setState({
			searchTerm: term
		});
	},
	componentDidUpdate: function(prevProps, prevState) {
		
			console.log("State Updated!");
			helpers.runQuery(this.state.searchTerm).then(function(data) {
		        if (data !== this.state.results) {
		          console.log(data);
		          this.setState({ results: data });
		          //after getting the result, post the search term to history and then get the updated history from the DB
		          helpers.postHistory(this.state.searchTerm).then(function() {
		          	console.log("Search term sent to server to update DB");
                helpers.getHistory().then(function(response) {
                  this.setState({ history: response.data });
                }.bind(this));
		          }.bind(this));
        		}
			}.bind(this));
		
	},
	componentDidMount: function() {
		helpers.getHistory().then(function(response) {
			console.log(response);
			if(response.data !== this.state.history) {
				console.log("History", response.data);
				this.setState({ history: response.data });
			}	
		}.bind(this));
	},
	render: function() {
		return(
		<div className="container">
	        <div className="row">
				<div className="jumbotron">
					<h2 className="text-center">Address Finder</h2>
					<p className="text-center">Enter a landmark to search for its exact address</p>
	          	</div>{/*jumbotron*/}

				<div className="col-md-6">
					{/*This will be the code we pass to the form Component*/}						
					<Form setTerm={this.setTerm} />
				</div>

				<div className="col-md-6">
					{/*This will be the code we pass to the results Component*/}
						<Results address={this.state.results} />
				</div>
			</div>
			<div className="row">
				{/*This will be the code we pass to the history Component*/}
				<History history={this.state.history} />
			</div>{/*row*/}
      	</div>
		);//return
	}//render
});//main

//export the file to be used by app.js
module.exports = Main;