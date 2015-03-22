/** @jsx React.DOM */

var React = require('react');
var Threads = require('./Threads.react');
var ChatActions = require('../actions/ChatActions');
var ThreadStore = require('../stores/ThreadStore');
var ThreadInput = require('./ThreadInput.react');

function getThreads() {
	return ThreadStore.getThreads();
}

var ThreadSection = React.createClass({

	getInitialState: function() {
		return {threads: getThreads()}
	},

	componentWillMount: function() {
		ThreadStore.addChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({threads: getThreads() });
	},

	render: function() {
		return (
			<section className="thread-section">
				<Threads data={this.state.threads}/>
				<ThreadInput />
			</section>
		);
	}
});

module.exports = ThreadSection;