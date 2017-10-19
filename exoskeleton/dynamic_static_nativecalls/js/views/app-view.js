/*global Backbone, microtemplate, ENTER_KEY */
var app = app || {};

(function () {___jdce_logger("/js/views/app-view.js", 0);
	'use strict';

	var toggleEl = function (el, toggle) {___jdce_logger("/js/views/app-view.js", 1);
		el.style.display = toggle ? '' : 'none';
	};

	var matchesSelector = function (node, selector) {___jdce_logger("/js/views/app-view.js", 2);
		return [].some.call(document.querySelectorAll(selector), function (el) {___jdce_logger("/js/views/app-view.js", 3);
			return el === node;
		});
	};

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#todoapp',

		// Our template for the line of statistics at the bottom of the app.
		statsTemplate: microtemplate(document.querySelector('#stats-template').innerHTML),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			'keypress #new-todo': 'createOnEnter',
			'click #clear-completed': 'clearCompleted',
			'click #toggle-all': 'toggleAllComplete'
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {___jdce_logger("/js/views/app-view.js", 4);
			this.allCheckbox = this.$('#toggle-all').item(0);
			this.input = this.$('#new-todo').item(0);
			this.footer = this.$('#footer').item(0);
			this.main = this.$('#main').item(0);

			this.listenTo(app.todos, 'add', this.addOne);
			this.listenTo(app.todos, 'reset', this.addAll);
			this.listenTo(app.todos, 'change:completed', this.filterOne);
			this.listenTo(app.todos, 'filter', this.filterAll);
			this.listenTo(app.todos, 'all', this.render);

			// Suppresses 'add' events with {reset: true} and prevents the app view
			// from being re-rendered for every model. Only renders when the 'reset'
			// event is triggered at the end of the fetch.
			app.todos.fetch({reset: true});
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {___jdce_logger("/js/views/app-view.js", 5);
			var completed = app.todos.completed().length;
			var remaining = app.todos.remaining().length;
			var selector = '[href="#/' + (app.TodoFilter || '') + '"]';

			if (app.todos.length) {
				// TODO
				toggleEl(this.main, true);
				toggleEl(this.footer, true);

				this.footer.innerHTML = this.statsTemplate({
					completed: completed,
					remaining: remaining
				});

				[].forEach.call(this.$('#filters li a'), function (el) {___jdce_logger("/js/views/app-view.js", 6);
					el.classList.remove('selected');
					if (matchesSelector(el, selector)) {
						el.classList.add('selected');
					}
				});

			} else {
				toggleEl(this.main, false);
				toggleEl(this.footer, false);
			}

			this.allCheckbox.checked = !remaining;
		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function(){___jdce_logger("/js/views/app-view.js", 7);},

		// Add all items in the **Todos** collection at once.
		addAll: function () {___jdce_logger("/js/views/app-view.js", 8);
			this.$('#todo-list').item(0).innerHTML = '';
			app.todos.forEach(this.addOne, this);
		},

		filterOne: function(){___jdce_logger("/js/views/app-view.js", 9);},

		filterAll: function(){___jdce_logger("/js/views/app-view.js", 10);},

		// Generate the attributes for a new Todo item.
		newAttributes: function(){___jdce_logger("/js/views/app-view.js", 11);},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		createOnEnter: function(){___jdce_logger("/js/views/app-view.js", 12);},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function(){___jdce_logger("/js/views/app-view.js", 13);},

		toggleAllComplete: function(){___jdce_logger("/js/views/app-view.js", 14);}
	});
})();
