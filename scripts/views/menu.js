export default Backbone.View.extend({

	template: JST['menu-item'],

	tagName: 'div',
	className: 'main-menu-categories',

	events: {

	},

	initialize: function() {
		console.log(this);
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});