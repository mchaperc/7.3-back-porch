export default Backbone.View.extend({

	template: JST['cart-order'],

	tagName: 'div',
	className: 'dynamic-order',

	events: {
		'click .submit-order': 'submitOrder',
	},

	initialize: function() {
		this.render();
		this.listenTo(this.collection, 'add remove', this.render);
		this.listenTo(this.collection, 'add remove', this.doStuff);
	},

	render: function() {
		this.$el.html(this.template(this.collection.serialize()));
	},

	submitOrder: function() {
		this.collection.save();
		$('.your-cart-values').html('');
		$('.your-cart-tally-subtotal').text('$ 0');
		$('.order-complete').show();
	}

});