export default Backbone.View.extend({

	template: JST['menu-item'],

	tagName: 'ul',
	className: 'main-menu-categories-items',

	events: {
		'click .main-menu-categories-items-item': 'addItem',
	},

	initialize: function(options) {
		this.render();
		this.order = options.order;
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	addItem: function() {
		this.order.add(this.model);
	}

});