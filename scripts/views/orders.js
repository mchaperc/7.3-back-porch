export default Backbone.View.extend({

	template: JST['cart-order'],

	tagName: 'div',
	className: 'dynamic-order',

	events: {

	},

	initialize: function() {
		this.render();
		this.listenTo(this.collection, 'add remove', this.render);
		console.log(this.collection.subtotal);
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});