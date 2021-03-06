/*global Backbone */
var app = app || {};

(function () {___jdce_logger("/js/collections/todos.js", 0);
	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	var Todos = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Todo,

		// Save all of the todo items under the `"todos"` namespace.
		localStorage: new Backbone.LocalStorage('todos-exoskeleton'),

		// Filter down the list of all todo items that are finished.
		completed: function(){___jdce_logger("/js/collections/todos.js", 1);},

		// Filter down the list to only todo items that are still not finished.
		remaining: function(){___jdce_logger("/js/collections/todos.js", 2);},

		// Return last item on list if any. Otherwise return null.
		last: function(){___jdce_logger("/js/collections/todos.js", 3);},

		// We keep the Todos in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function(){___jdce_logger("/js/collections/todos.js", 4);},

		// Todos are sorted by their original insertion order.
		comparator: 'order'
	});

	// Create our global collection of **Todos**.
	app.todos = new Todos();
})();
