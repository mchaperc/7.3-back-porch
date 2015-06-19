import MenuTypes from './menu-types';

export default Backbone.View.extend({

	template: JST['menu-collection'],

	tagName: 'div',
	className: 'main-menu-categories',

	events: {

	},

	initialize: function(options) {
		this.render(options);
	},

	render: function(options) {
		this.$el.html(this.template(this.collection.toJSON()));
		this.renderChildren(options);
	},

	renderChildren: function(options){

		this.order = options.order;

		_.invoke(this.children || [], 'remove');

		var popularFoods = _.filter(this.collection.models, function(item) {
			if (item.get('popularity') > 7) {
				return item;
			}
		});

		var filteredFoods = new Backbone.Collection(popularFoods);

		var popularView = new MenuTypes({
			type: 'popular',
			collection: filteredFoods,
			order: this.order
		}) 

		this.$el.append(popularView.el);
		this.children = [popularView];

		_.each(this.collection.groupBy('type'), function(foods, type) {
			var foodCollection = new Backbone.Collection(foods)
			var typeView = new MenuTypes({
				type: type,
				collection: foodCollection,
				order: this.order
			});
			this.children.push(typeView);
			this.$el.append(typeView.el);
		}.bind(this));
        console.log(this.children);
		return this;
	},

	remove: function(){
		_.invoke(this.children || [], 'remove');
		Backbone.View.prototype.remove.apply(this, arguments);
	}

});