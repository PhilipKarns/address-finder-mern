var React = require("react");

var History = React.createClass({
		render: function() {
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search History</h3>
				</div>
				<div className="panel-body text-center">
              {/* Here we use a map function to loop through an array in JSX */}
              {/*this takes the props passed(an array of objects, and maps each array item to have  to just show the location and date,
              therefore removing the values from the object. The key of i creates a react id and gives each item between the p tags a react id*/}
		          {this.props.history.map(function(search, i) {
		            return (
		              <p key={i}>{search.location} - {search.date}</p>
		            );
		          })}
				</div>
			</div>
		);
	}
});

module.exports = History;