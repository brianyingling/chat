/** @jsx React.DOM */
var React = require('react');
var Thread = require('./Thread.react');
var ChatActions = require('../actions/ChatActions');

var Threads = React.createClass({
	componentDidMount: function() {
		ChatActions.loadThreads(this.props.data);
	}, 
	render: function() {
		var threads = this.props.data.map(function(thread) {
				return (<Thread data={thread} />)
			});
		
		return (
			<div>{threads}</div>
		);
	}
});

module.exports = Threads;