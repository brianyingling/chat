var React = require('react');
var ChatActions = require('../actions/ChatActions');

var MessageInput = React.createClass({
	
	handleSubmit: function(e) {
		e.preventDefault();
		var text = this.refs.text.getDOMNode().value.trim();
		var user = this.refs.user.getDOMNode().value.trim();
		var message = {user: user, message: text};
		
		ChatActions.sendMessage(message);
		this.refs.text.getDOMNode().value = '';
		
	},
	render: function() {
		return (
			<div className="message-input">
				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-sm-4">
							<input type="text" className="form-control" ref="user" placeholder="Username"/>
						</div>
						<div className="col-sm-8"></div>
					</div>
					<div className="form-group">
						<div className='col-sm-10'>
							<input type="text" className="form-control" ref="text" placeholder="Type a message"/>
						</div>
						<div className="col-sm-2">
							<button onClick={this.handleSubmit} className="btn btn-primary btn-sm">Save</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = MessageInput;