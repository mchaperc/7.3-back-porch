import MenuView from './views/menu';
import {FoodItem, FoodCollection} from './models/foodItem';
import config from 'ajax-config';

var Router = Backbone.Router.extend({

	routes: {
		'': 'index',
	},

	initialize: function() {
		this.menu = new FoodCollection();
		this.menu.fetch().then(function(data) {
			this.menuView = new MenuView({collection: this.menu});
			$('.main-menu').html(this.menuView.el);
		}.bind(this));
	},

	index: function() {
		
	},



});

var router = new Router();
export default router;