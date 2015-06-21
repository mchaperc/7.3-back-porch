export default Backbone.View.extend({

	template: JST['contact'],
	tagName: 'form',
	className: 'modal-contact-form',

	events: {

	},

	initialize: function() {
		// this.render();
		console.log(this);
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});