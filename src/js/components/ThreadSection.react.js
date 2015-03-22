/** @jsx React.DOM */

var React = require('React');
var Threads = require('./Threads.react');
var ChatActions = require('../actions/ChatActions');

var ThreadSection = React.createClass({
	render: function() {
		return (
			<section className="thread-section">
				<Threads />
			</section>
		);
	}
});

module.exports = ThreadSection;