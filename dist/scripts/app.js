require.register("ajax-config", function(exports, require, module){
  /*
  If the url is to Parse, add the Parse headers
*/
'use strict';

$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
  if (options.url.match(/api.parse.com/)) {
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'Ar56BUmyaAAXONtP0pArVbRFjf4QLNPPC5elSrfn';
    options.headers['X-Parse-REST-API-Key'] = 'F3DBb1HWkddk4nlYtTZb5T6hSMyMFH6AafKMs8WS';
  }
});
  
});

require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('router');

var _router2 = _interopRequireDefault(_router);

(function () {
  'use strict';

  $(document).ready(function () {
    Backbone.history.start();

    $(document).on('click', '.main-menu-categories-type', function () {
      $(this).siblings('.main-menu-categories-items').slideToggle();
      $(this).children('.fa-chevron-down').toggle();
      $(this).children('.fa-chevron-up').toggle();
    });

    $('.contact').on('click', function (e) {
      $('.modal-contact-form').show();
      $('.blanket-div').show();
    });
  });
})();
  
});

require.register("router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsMenuCollection = require('./views/menu-collection');

var _viewsMenuCollection2 = _interopRequireDefault(_viewsMenuCollection);

var _viewsOrders = require('./views/orders');

var _viewsOrders2 = _interopRequireDefault(_viewsOrders);

var _viewsAdmin = require('./views/admin');

var _viewsAdmin2 = _interopRequireDefault(_viewsAdmin);

var _viewsContact = require('./views/contact');

var _viewsContact2 = _interopRequireDefault(_viewsContact);

var _modelsFoodItem = require('./models/foodItem');

var _modelsOrder = require('./models/order');

var _modelsUsers = require('./models/users');

var _ajaxConfig = require('ajax-config');

var _ajaxConfig2 = _interopRequireDefault(_ajaxConfig);

var Router = Backbone.Router.extend({

	routes: {
		'': 'index',
		'admin': 'admin'
	},

	initialize: function initialize() {
		this.menu = new _modelsFoodItem.FoodCollection();
		this.order = new _modelsOrder.Order();
		this.users = new _modelsUsers.UserCollection();
	},

	index: function index() {
		this.menu.fetch().then((function (data) {
			this.menuView = new _viewsMenuCollection2['default']({ collection: this.menu,
				order: this.order });
			$('.main-menu').html(this.menuView.el);
		}).bind(this));
		this.users.fetch().then(function (data) {
			this.users.reset(data);
			this.contactView = new _viewsContact2['default']({ collection: this.users });
			$('.main-content').prepend(this.contactView.el);
		});
		this.orderView = new _viewsOrders2['default']({ collection: this.order });
		$('.cart-template').html(this.orderView.el);
	},

	admin: function admin() {
		this.order.fetch().then((function (data) {
			this.adminView = new _viewsAdmin2['default']({ collection: this.order });
			$('.main-content').html(this.adminView.el);
			$('.main-order').html('');
		}).bind(this));
	}

});

var router = new Router();
exports['default'] = router;
module.exports = exports['default'];
  
});

require.register("models/foodItem", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var FoodItem = Backbone.Model.extend({

	idAttribute: 'objectId'

});

var FoodCollection = Backbone.Collection.extend({

	model: FoodItem,
	url: 'https://api.parse.com/1/classes/menu',
	parse: function parse(response) {
		return response.results;
	}

});

exports['default'] = { FoodItem: FoodItem, FoodCollection: FoodCollection };
module.exports = exports['default'];
  
});

require.register("models/order", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _foodItem = require('./foodItem');

var Order = Backbone.Model.extend({
  idAttribute: 'objectId',

  urlRoot: 'https://api.parse.com/1/classes/Order',

  defaults: {
    name: ''
  },

  initialize: function initialize() {
    // Create a task collection to keep track of our tasks
    this.foods = new _foodItem.FoodCollection();

    // Trigger all tasks events on myself
    this.listenTo(this.foods, 'all', this.trigger.bind(this));
  },

  // Proxy the add method to the underlying task collection
  add: function add(models, options) {
    return this.foods.add(models, options);
  },

  // Proxy the remove method to the underlying task collection
  remove: function remove(models, options) {
    return this.foods.remove(models, options);
  },

  toJSON: function toJSON() {
    return _.extend({}, this.attributes, {
      foods: this.foods.map(function (food) {
        return {
          '__type': 'Pointer',
          'className': 'Food',
          'objectId': food.id
        };
      })
    });
  },

  serialize: function serialize() {
    return _.extend({}, this.attributes, {
      foods: this.foods.toJSON(),
      subtotal: this.subtotal()
    });
  },

  subtotal: function subtotal() {
    return this.foods.reduce(function (a, b) {
      return a + b.get('price');
    }, 0);
  }

});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: 'https://api.parse.com/1/classes/Order',
  parse: function parse(response) {
    return response.results;
  }
});

exports['default'] = { Order: Order, OrderCollection: OrderCollection };
module.exports = exports['default'];
  
});

require.register("models/users", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var User = Backbone.Model.extend({

	urlRoot: 'https://api.parse.com/1/classes/Users',

	idAttribute: 'objectId',
	defaults: {
		name: '',
		phone: '',
		email: '',
		address: ''
	}

});

var UserCollection = Backbone.Collection.extend({

	model: User,
	url: 'https://api.parse.com/1/classes/Users',
	parse: function parse(response) {
		return response.results;
	}
});

exports['default'] = { User: User, UserCollection: UserCollection };
module.exports = exports['default'];
  
});

require.register("views/admin", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _individualOrder = require('./individual-order');

var _individualOrder2 = _interopRequireDefault(_individualOrder);

exports['default'] = Backbone.View.extend({

  template: JST['admin-orders'],
  tagName: 'div',
  className: 'order-container',

  initialize: function initialize() {
    this.render();
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function render() {
    // this.$el.html(this.template(this.collection.toJSON()));
    this.renderChildren();
  },

  renderChildren: function renderChildren(options) {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.attributes.results.map((function (child) {
      var view = new _individualOrder2['default']({
        model: child,
        collection: this.collection
      });
      this.$el.append(view.el);
      return view;
    }).bind(this));
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }

});
module.exports = exports['default'];
  
});

require.register("views/contact", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Backbone.View.extend({

	template: JST['contact'],
	tagName: 'form',
	className: 'modal-contact-form',

	events: {},

	initialize: function initialize() {
		// this.render();
		console.log(this);
	},

	render: function render() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});
module.exports = exports['default'];
  
});

require.register("views/individual-order", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Backbone.View.extend({

	template: JST['individual-order'],

	tagName: 'div',
	className: 'order-container-individual',

	events: {
		'click .order-completed': 'completeOrder'
	},

	initialize: function initialize() {
		this.render();
	},

	render: function render() {
		this.$el.html(this.template(this.model));
	},

	completeOrder: function completeOrder() {
		if (confirm('Are you sure this order is completed?')) {
			this.collection.remove(this.model);
		}
	}

});
module.exports = exports['default'];
  
});

require.register("views/menu-collection", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _menuTypes = require('./menu-types');

var _menuTypes2 = _interopRequireDefault(_menuTypes);

exports['default'] = Backbone.View.extend({

	template: JST['menu-collection'],

	tagName: 'div',
	className: 'main-menu-categories',

	events: {},

	initialize: function initialize(options) {
		this.render(options);
	},

	render: function render(options) {
		this.$el.html(this.template(this.collection.toJSON()));
		this.renderChildren(options);
	},

	renderChildren: function renderChildren(options) {

		this.order = options.order;

		_.invoke(this.children || [], 'remove');

		var popularFoods = _.filter(this.collection.models, function (item) {
			if (item.get('popularity') > 7) {
				return item;
			}
		});

		var filteredFoods = new Backbone.Collection(popularFoods);

		var popularView = new _menuTypes2['default']({
			type: 'popular',
			collection: filteredFoods,
			order: this.order
		});

		this.$el.append(popularView.el);
		this.children = [popularView];

		_.each(this.collection.groupBy('type'), (function (foods, type) {
			var foodCollection = new Backbone.Collection(foods);
			var typeView = new _menuTypes2['default']({
				type: type,
				collection: foodCollection,
				order: this.order
			});
			this.children.push(typeView);
			this.$el.append(typeView.el);
		}).bind(this));
		return this;
	},

	remove: function remove() {
		_.invoke(this.children || [], 'remove');
		Backbone.View.prototype.remove.apply(this, arguments);
	}

});
module.exports = exports['default'];
  
});

require.register("views/menu-items", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Backbone.View.extend({

	template: JST['menu-item'],

	tagName: 'ul',
	className: 'main-menu-categories-items',

	events: {
		'click .main-menu-categories-items-item': 'addItem'
	},

	initialize: function initialize(options) {
		this.render();
		this.order = options.order;
	},

	render: function render() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	addItem: function addItem() {
		this.order.add(this.model);
	}

});
module.exports = exports['default'];
  
});

require.register("views/menu-types", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _menuItems = require('./menu-items');

var _menuItems2 = _interopRequireDefault(_menuItems);

exports['default'] = Backbone.View.extend({

  template: JST['menu-types'],

  tagName: 'div',
  className: 'main-menu-categories-container',
  hidden: true,

  events: {},

  initialize: function initialize(options) {
    this.type = options.type;
    this.order = options.order;
    this.render(options);
    // console.log('menuTypes', options.type, this.collection);
  },

  render: function render(options) {
    this.$el.html(this.template(this.type));
    this.renderChildren(options);
  },

  renderChildren: function renderChildren(options) {
    _.invoke(this.children || [], 'remove');

    this.order = options.order;

    this.alreadyRendered = [];

    this.children = this.collection.map((function (child) {
      var view = new _menuItems2['default']({
        model: child,
        collection: this.collection,
        order: this.order
      });
      this.$el.append(view.el);
      return view;
    }).bind(this));
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }

});
module.exports = exports['default'];
  
});

require.register("views/orders", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Backbone.View.extend({

	template: JST['cart-order'],

	tagName: 'div',
	className: 'dynamic-order',

	events: {
		'click .submit-order': 'submitOrder'
	},

	initialize: function initialize() {
		this.render();
		this.listenTo(this.collection, 'add remove', this.render);
		this.listenTo(this.collection, 'add remove', this.doStuff);
	},

	render: function render() {
		this.$el.html(this.template(this.collection.serialize()));
	},

	doStuff: function doStuff(args) {
		console.log(this.collection.subtotal());
	},

	submitOrder: function submitOrder() {
		this.collection.save();
	}

});
module.exports = exports['default'];
  
});

//# sourceMappingURL=app.js.map