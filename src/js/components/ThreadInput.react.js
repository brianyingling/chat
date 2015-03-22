/** @jsx React.DOM */

var React = require('react');
var ChatActions = require('../actions/ChatActions');

var ThreadInput = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		ChatActions.createThread();
	},
	render: function() {
		return (
			<form className="form-inline">
				<button className="btn btn-default btn-sm" onClick={this.handleSubmit}>
					New Thread
				</button>
			</form>
		);
	}
});

module.exports = ThreadInput;