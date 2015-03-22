var AppDispatcher = require('../dispatchers/AppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var ChatActions = {

	sendMessage: function(message) {
		console.log('message:', message);
		AppDispatcher.handleViewAction({
			actionType: ChatConstants.SEND_MESSAGE,
			message: message
		});
	},

	clickThread: function(threadId) {
		console.log('click thread...:',threadId);
		AppDispatcher.handleViewAction({
			actionType: ChatConstants.CLICK_THREAD,
			threadId: threadId
		}); 
	},

	loadThreads: function(threads) {
		console.log('loading threads...:', threads);
		AppDispatcher.handleViewAction({
			actionType: ChatConstants.LOAD_THREADS,
			threads: threads
		});
	},

	createThread: function() {
		AppDispatcher.handleViewAction({
			actionType: ChatConstants.CREATE_THREAD
		});
	}
};

module.exports = ChatActions;