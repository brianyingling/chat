var AppDispatcher = require('../dispatchers/AppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var ChatActions = {

	sendMessage: function(message) {
		// this is where we would call the appDispatcher
		console.log('message:', message);
		AppDispatcher.handleViewAction({
			actionType: ChatConstants.SEND_MESSAGE,
			message: message
		});
	}

};

module.exports = ChatActions;