/** @jsx React.DOM */
var React = require('react');
var MessageSection = require('./MessageSection.react');
var ThreadSection = require('./ThreadSection.react');

var Chat = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="col-sm-6">
					<ThreadSection />
				</div>
				<div className="col-sm-6">
					<MessageSection />
				</div>
			</div>
		);
	}
});

module.exports = Chat;