var _ = require('underscore');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var ThreadStore = require('../stores/ThreadStore');

var CHANGE_EVENT = 'change';
var _messages = [];

function _addMessage(message) {
	_messages.push(message);
}

// // adds the currently chosen thread id to the message
// function _addThreadId(message) {
// 	message.threadId = ThreadStore.getCurrentThreadId();
// 	return message;
// }

var MessageStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getMessages: function() {
		return _.filter(_messages, function(message) {
			return message.threadId === ThreadStore.getCurrentThreadId();
		});
	},
	dispatcherIndex: AppDispatcher.register(function(payload) {
		var action = payload.action;
		
		switch(action.actionType) {
			
			case ChatConstants.SEND_MESSAGE:
				// var message = _addThreadId(payload.action.message);
				_addMessage(payload.action.message);
				MessageStore.getMessages();
				MessageStore.emitChange();
				break;
			
			case ChatConstants.CLICK_THREAD:
				MessageStore.getMessages();
				MessageStore.emitChange();
				break;

			default:
				return true;
		};
		return true;
	})
});
module.exports = MessageStore;