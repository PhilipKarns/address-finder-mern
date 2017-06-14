var React = require("react");

var Form = React.createClass({
	getInitialState: function() {
		return{ term: "" };
	},
	//if you have only one input field, you could use: this.setState({ term: event.target.value }) in the handleChange method
	//the code below will be useful if there are multiple input fields, because it grabs the ID of the input field before changing state
	handleChange: function(event) {
 		var newState ={};
		newState[event.target.id] = event.target.value;
		this.setState(newState);

		{/*		 
		;*/}
	},
	handleSubmit: function(event) {
	    event.preventDefault();
    	this.props.setTerm(this.state.term);
    	this.setState({ term: "" });
	},
	render: function() {
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Query</h3>
				</div>
				<div className="panel-body text-center">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<h4>
								<strong>Location</strong>
							</h4>
							<input
								type="text"
								value={this.state.term}
								className="form-control text-center"
								id="term"
								onChange={this.handleChange}
							/>
							<br/>
							<button className="btn btn-primary" type="submit">
							Submit
							</button>
						</div>
					</form>
				</div>
			</div>

		);
	}
});

module.exports = Form;