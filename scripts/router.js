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
		'admin': 'admin'
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
		}.bind(this));
		this.users.fetch().then(function(data) {
			this.users.reset(data);
			this.contactView = new ContactView({collection: this.users});
			$('.main-content').prepend(this.contactView.el);
		})
		this.orderView = new OrderView({collection: this.order});
		$('.cart-template').html(this.orderView.el);
	},

	admin: function() {
		this.order.fetch().then(function(data) {
			this.adminView = new AdminView({collection: this.order});
			$('.main-content').html(this.adminView.el);
			$('.main-order').html('');
		}.bind(this));
	}

});

var router = new Router();
export default router;