/** @jsx React.DOM */
var React = require('react');
var Message = require('./Message.react');


var Messages = React.createClass({
	
	render: function() {
		var messages = this.props.data.map(function(message) {
			return (
				<Message message={message} />
			);
		});
		return (
			<div className="messages">
				{messages}
			</div>
		);
	}
});

module.exports = Messages;