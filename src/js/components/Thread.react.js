/** @jsx React.DOM */
var React = require('react');
var ChatActions = require('../actions/ChatActions');
var cx = require('react/lib/cx');

var Thread = React.createClass({
	getInitialstate: function() {
		return {active: false};
	},
	handleClick: function(e) {
		e.preventDefault();
		ChatActions.clickThread(this.props.data.id);
	},
	isActive: function() {
		var className = "thread";
		var active = (!!this.props.data.active) ? 'active' : ''
		return className + " " + active;
	},
	render: function() {
		var classes = cx({
			'thread':true,
			'active':this.props.data.active
		});
		return (
			<div className={classes} onClick={this.handleClick}>
				{this.props.data.name}
			</div>
		);
	}
});

module.exports = Thread;