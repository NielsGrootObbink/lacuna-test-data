// Generated by CoffeeScript 1.9.1
(function() {___jdce_logger("/js/models/todo.js", 0);
  var extend = function(child, parent) {___jdce_logger("/js/models/todo.js", 1); for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() {___jdce_logger("/js/models/todo.js", 2); this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.Todo = (function(superClass) {___jdce_logger("/js/models/todo.js", 3);
    extend(Todo, superClass);

    function Todo() {___jdce_logger("/js/models/todo.js", 4);
      return Todo.__super__.constructor.apply(this, arguments);
    }

    Todo.configure('Todo', 'title', 'completed');

    Todo.extend(Spine.Model.Local);

    Todo.active = function() {___jdce_logger("/js/models/todo.js", 5);
      return this.select(function(todo) {___jdce_logger("/js/models/todo.js", 6);
        return !todo.completed;
      });
    };

    Todo.completed = function() {___jdce_logger("/js/models/todo.js", 7);
      return this.select(function(todo) {___jdce_logger("/js/models/todo.js", 8);
        return !!todo.completed;
      });
    };

    Todo.destroyCompleted = function(){___jdce_logger("/js/models/todo.js", 9);};

    return Todo;

  })(Spine.Model);

}).call(this);