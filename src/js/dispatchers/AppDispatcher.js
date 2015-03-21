var Dispatcher = require('./Dispatcher');
var assign = require('object-assign');

var AppDispatcher = assign({}, Dispatcher.prototype, {

	handleViewAction: function(action) {
		console.log('view action:', action);
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
});

module.exports = AppDispatcher;