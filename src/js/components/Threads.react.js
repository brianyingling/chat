/** @jsx React.DOM */
var React = require('react');
var Thread = require('./Thread.react');

var _threads = [
	{id: 1, name: 'Thread 1'},
	{id: 2, name: 'Thread 2'},
	{id: 3, name: 'Thread 3'}
];

var Threads = React.createClass({
	render: function() {
		var threads = _threads.map(function(thread) {
				return (<Thread data={thread} />)
			});
		
		return (
			<div>{threads}</div>
		);
	}
});

module.exports = Threads;