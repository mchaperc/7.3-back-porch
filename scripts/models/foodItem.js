var FoodItem = Backbone.Model.extend({

	idAttribute: 'objectId',

});

var FoodCollection = Backbone.Collection.extend({

	model: FoodItem,
	url: 'https://api.parse.com/1/classes/menu',
	parse: function(response) {
		return response.results;
	}

});

export default {FoodItem, FoodCollection};