

export default Backbone.View.extend({

	template: JST['individual-order'],

	tagName: 'div',
	className: 'order-container-individual',

	events: {
		'click .order-completed': 'completeOrder'
	},

	initialize: function() {
		this.render();
		console.log(this.collection);
	},

	render: function() {
		this.$el.html(this.template(this.model));
	},

	completeOrder: function() {
		if (confirm("Are you sure this order is completed?")) {
			this.collection.remove(this.model);
		}
	}

});