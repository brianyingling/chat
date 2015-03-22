var _ = require('underscore');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var MessageStore = require('../stores/MessageStore');

var CHANGE_EVENT = 'change';

// var _threads = [
// 	{id: 1, name: 'Thread 1', active: true},
// 	{id: 2, name: 'Thread 2'},
// 	{id: 3, name: 'Thread 3'}
// ];
var _threads = {};
var _idCount = 0;

var _currentThreadId;

// adds the currently chosen thread id to the message
function _addThreadId(message) {
	message.threadId = ThreadStore.getCurrentThreadId();
	return message;
}

function _createThread() {
	var id = _setCurrentThreadId(++_idCount);
	var newThread = {id: id, name: 'New Thread', active: true};
	_threads[id] = newThread;
}

function _setCurrentThreadId(id) {
	_currentThreadId = id;
	return _currentThreadId;
};

function _toggleActivation(id) {
	for (var key in _threads) {
		_threads[key].active = (_threads[key].id == id);
	}
};

// takes the last statement of a thread and makes it the thread's name
function _processThreads(threads) {
	var threadIds = _.compact(_.map(threads, function(thread) {return thread.threadId}));
	_.map(threadIds, function(threadId) {
		var msgs = _.where(threads, {threadId: threadId});
		var lastMsg = _.last(msgs);
		_threads[lastMsg.threadId] = {id: lastMsg.threadId, name: lastMsg.message};
		return _threads[lastMsg.threadId];
	});
}

function _updateThreads(threads) {
	_processThreads(threads);
}

function _handleClick(id) {
	_setCurrentThreadId(id);
	_toggleActivation(id);
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
	getThreads: function() {
		return _threads;
	},
	dispatcherIndex: AppDispatcher.register(function(payload) {
		var action = payload.action;

		switch(action.actionType) {
			
			case ChatConstants.CLICK_THREAD:
				_handleClick(payload.action.threadId);
				ThreadStore.emitChange();
				break;

			case ChatConstants.LOAD_THREADS:
				_processThreads(payload.action.threads);
				ThreadStore.emitChange();
				break;

			case ChatConstants.SEND_MESSAGE:
				_addThreadId(payload.action.message);
				_processThreads([payload.action.message]);
				_toggleActivation(ThreadStore.getCurrentThreadId());
				ThreadStore.emitChange();
				break;

			case ChatConstants.CREATE_THREAD:
				_createThread();
				_toggleActivation(ThreadStore.getCurrentThreadId());
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