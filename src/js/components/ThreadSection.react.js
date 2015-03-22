/** @jsx React.DOM */

var React = require('react');
var Threads = require('./Threads.react');
var ChatActions = require('../actions/ChatActions');
var ThreadStore = require('../stores/ThreadStore');

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
		console.log('threads:',this.state.threads);
		return (
			<section className="thread-section">
				<Threads data={this.state.threads}/>
			</section>
		);
	}
});

module.exports = ThreadSection;