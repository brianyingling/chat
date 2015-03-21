/** @jsx React.DOM */

var React = require('react');
var Messages = require('./Messages.react');
var MessageInput= require('./MessageInput.react');
var MessageStore = require('../stores/MessageStore');

var getMessages = function() {
	return MessageStore.getMessages();
}

var MessageSection = React.createClass({

	getInitialState: function() {
		return {messages: getMessages()};
	},

	componentWillMount: function() {
		MessageStore.addChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState(getMessages());
	},

	render: function() {
		return (
			<section className="message-section">
				<Messages className="messages" data={this.state.messages} />
				<MessageInput />
			</section>
		);
	}
});

module.exports = MessageSection;