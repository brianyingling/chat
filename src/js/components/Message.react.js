var React = require('react');

var Message = React.createClass({
	render: function() {
		return (
			<div className="message">
				<span className="user">{this.props.message.user}: </span>
				<span className="text">{this.props.message.message}</span>
			</div>
		);
	}
});

module.exports = Message;