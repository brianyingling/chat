/** @jsx React.DOM */
var React = require('react');
var ChatActions = require('../actions/ChatActions');

var Thread = React.createClass({
	handleClick: function(e) {
		e.preventDefault();
		ChatActions.clickThread(this.props.data.id);
	},
	render: function() {
		return (
			<div className="thread" onClick={this.handleClick}>
				{this.props.data.name}
			</div>
		);
	}
});

module.exports = Thread;