export default Backbone.View.extend({

	template: JST['contact-form'],
	action: '#',
	tagName: 'form',
	className: 'modal-contact-form',

	events: {
		'submit': 'addUser',
	},

	initialize: function() {
		this.render();
		console.log(this);
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	addUser: function(e) {
		e.preventDefault();
		var name = $('.name-input').val();
		var phone = $('.phone-input').val();
		var email = $('.email-input').val();
		var address = $('.address-input').val();
		this.collection.create({
			name: name,
			phone: phone,
			email: email,
			address: address
		});
		$('.user-added').show();
	}

});