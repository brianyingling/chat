var React = require('react');

var Message = React.createClass({
	render: function() {
		console.log('props:',this.props.message);
		console.log('state:',this.state);
		return (
			<div className="message">
				<span className="user">{this.props.message.user}: </span>
				<span className="text">{this.props.message.message}</span>
			</div>
		);
	}
});

module.exports = Message;