import MenuView from './views/menu-collection';
import OrderView from './views/orders';
import {FoodItem, FoodCollection} from './models/foodItem';
import {Order, OrderCollection} from './models/order';
import config from 'ajax-config';

var Router = Backbone.Router.extend({

	routes: {
		'': 'index',
	},

	initialize: function() {
		this.menu = new FoodCollection();
		this.order = new Order();
	},

	index: function() {
		this.menu.fetch().then(function(data) {
			this.menuView = new MenuView({collection: this.menu,
											order: this.order});
			$('.main-menu').html(this.menuView.el);
		}.bind(this));
		this.orderView = new OrderView({collection: this.order});
		$('.cart-template').html(this.orderView.el);
	},



});

var router = new Router();
export default router;