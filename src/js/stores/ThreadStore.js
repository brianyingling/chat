var AppDispatcher = require('../dispatchers/AppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _threads = {};
var _currentThreadId;

function _setCurrentThreadId(id) {
	console.log('setting current thread id...', id);
	id = id || 1;
	_currentThreadId = id;
};

var ThreadStore = assign({}, EventEmitter.prototype, {
	init: function() {
		_setCurrentThreadId(1);
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getCurrentThreadId: function() {
		return _currentThreadId;
	},
	dispatcherIndex: AppDispatcher.register(function(payload) {
		var action = payload.action;

		switch(action.actionType) {
			case ChatConstants.CLICK_THREAD:
				_setCurrentThreadId(payload.action.threadId);
				ThreadStore.emitChange();
				break;
			default:
				return true;
		};
		return true;
	})
});

ThreadStore.init();

module.exports = ThreadStore;