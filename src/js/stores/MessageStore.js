var AppDispatcher = require('../dispatchers/AppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _messages = [];

function _addMessage(message) {
	_messages.push(message);
}

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
		return _messages;
	},
	dispatcherIndex: AppDispatcher.register(function(payload) {
		var action = payload.action;
		
		switch(action.actionType) {
			case ChatConstants.SEND_MESSAGE:
				_addMessage(payload.action.message);
				MessageStore.emitChange();
				break;
			default:
				// do nothing
		};
		return true;
	})
});
module.exports = MessageStore;