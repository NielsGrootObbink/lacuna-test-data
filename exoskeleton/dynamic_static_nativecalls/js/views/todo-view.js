/*global Backbone, microtemplate, ENTER_KEY, ESCAPE_KEY */
var app = app || {};

(function () {___jdce_logger("/js/views/todo-view.js", 0);
	'use strict';

	// Todo Item View
	// --------------

	// The DOM element for a todo item...
	app.TodoView = Backbone.View.extend({
		//... is a list tag.
		tagName:  'li',

		// Cache the template function for a single item.
		template: microtemplate(document.querySelector('#item-template').innerHTML),

		// The DOM events specific to an item.
		events: {
			'click .toggle': 'toggleCompleted',
			'dblclick label': 'edit',
			'click .destroy': 'clear',
			// Not keypress since it doesn't work with escape.
			'keyup .edit': 'handleKey',
			// Not blur since it doesn't bubble up.
			'focusout .edit': 'close'
		},

		// The TodoView listens for changes to its model, re-rendering. Since there's
		// a one-to-one correspondence between a **Todo** and a **TodoView** in this
		// app, we set a direct reference on the model for convenience.
		initialize: function(){___jdce_logger("/js/views/todo-view.js", 1);},

		// Re-render the titles of the todo item.
		render: function(){___jdce_logger("/js/views/todo-view.js", 2);},

		toggleVisible: function(){___jdce_logger("/js/views/todo-view.js", 3);},

		isHidden: function(){___jdce_logger("/js/views/todo-view.js", 4);},

		// Toggle the `"completed"` state of the model.
		toggleCompleted: function(){___jdce_logger("/js/views/todo-view.js", 5);},

		// Switch this view into `"editing"` mode, displaying the input field.
		edit: function(){___jdce_logger("/js/views/todo-view.js", 6);},

		// Close the `"editing"` mode, saving changes to the todo.
		close: function(){___jdce_logger("/js/views/todo-view.js", 7);},

		// If you hit `enter`, we're through editing the item.
		// If you hit `escape`, we're saving it with old value.
		handleKey: function(){___jdce_logger("/js/views/todo-view.js", 8);},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function(){___jdce_logger("/js/views/todo-view.js", 9);}
	});
})();
