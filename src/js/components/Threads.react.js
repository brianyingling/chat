/** @jsx React.DOM */
var _ = require('underscore');
var React = require('react');
var Thread = require('./Thread.react');
var ChatActions = require('../actions/ChatActions');

var Threads = React.createClass({
	componentWillMount: function() {
		ChatActions.loadThreads(this.props.data);
	}, 
	render: function() {
		var self = this;
		var threads = function() {
			_.inject(self.props.data, function(memo, thread) {
				memo[thread.id] = thread;
				return memo;
			}, {});
			
			return _.map(self.props.data, function(thread, key) {
				return (<Thread data={thread} />)
			});
		}
		return (
			<div>{threads()}</div>
		);
	}
});

module.exports = Threads;