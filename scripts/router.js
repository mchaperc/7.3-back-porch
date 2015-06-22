import MenuView from './views/menu-collection';
import OrderView from './views/orders';
import AdminView from './views/admin';
import ContactView from './views/contact';
import {FoodItem, FoodCollection} from './models/foodItem';
import {Order, OrderCollection} from './models/order';
import {User, UserCollection} from './models/users';
import config from 'ajax-config';

var Router = Backbone.Router.extend({

	routes: {
		'': 'index',
		'admin': 'admin',
		'contact': 'user'
	},

	initialize: function() {
		this.menu = new FoodCollection();
		this.order = new Order();
		this.users = new UserCollection();
	},

	index: function() {
		this.menu.fetch().then(function(data) {
			this.menuView = new MenuView({collection: this.menu,
											order: this.order});
			$('.main-menu').html(this.menuView.el);
			$('.main-order').show();
		}.bind(this));
		this.orderView = new OrderView({collection: this.order});
		$('.cart-template').html(this.orderView.el);
	},

	admin: function() {
		this.orders = new OrderCollection()
		this.orders.fetch().then(function(data) {
			this.adminView = new AdminView({collection: this.orders});
			$('.main-menu').html(this.adminView.el);
			$('.main-order').hide();
		}.bind(this));
	},

	user: function() {
		this.users.fetch().then(function(data) {
			this.contactView = new ContactView({collection: this.users});
			$('.main-menu').html(this.contactView.el);
			$('.main-order').hide();
		}.bind(this));
	}

});

var router = new Router();
export default router;