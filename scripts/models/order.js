import {FoodCollection} from './foodItem';

var Order = Backbone.Model.extend({
  idAttribute: 'objectId',

  urlRoot: 'https://api.parse.com/1/classes/Order',

  defaults: {
    name: ""
  },

  initialize: function(){
    // Create a task collection to keep track of our tasks
    this.foods = new FoodCollection();

    // Trigger all tasks events on myself
    this.listenTo(this.foods, 'all', this.trigger.bind(this));
  },

  // Proxy the add method to the underlying task collection
  add: function(models, options){
    return this.foods.add(models, options);
  },

  // Proxy the remove method to the underlying task collection
  remove: function(models, options){
    return this.foods.remove(models, options);
  },

  toJSON: function(){
    return _.extend({}, this.attributes, {
      foods: this.foods.map(function(food){
          return {
            "__type": "Pointer",
            "className": "Food",
            "objectId": food.id
          };
      })
    });
  },

  serialize: function() {
    return _.extend({}, this.attributes, {
      foods: this.foods.toJSON(),
      subtotal: this.subtotal()
    });
  },

  subtotal: function() {
    return this.foods.reduce(function(a, b) {
      return a + b.get('price');
    }, 0);
  }

});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: "https://api.parse.com/1/classes/Order"
});

export default {Order, OrderCollection};