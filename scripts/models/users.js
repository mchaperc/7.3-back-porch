var User = Backbone.Model.extend({

	urlRoot: 'https://api.parse.com/1/classes/Users',

	idAttribute: 'objectId',
	defaults: {
		name: '',
		phone: '',
		email: '',
		address: '',
	}

});

var UserCollection = Backbone.Collection.extend({

	model: User,
	url: 'https://api.parse.com/1/classes/Users',
	parse: function(response) {
	    return response.results;
	}
});

export default {User, UserCollection};