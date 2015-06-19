import {FoodCollection} from './foodItem';

var Order = Backbone.Model.extend({
  idAttribute: 'objectId',

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
      tasks: this.foods.map(function(task){
          return {
            "__type": "Pointer",
            "className": "Task",
            "objectId": task.id
          };
      })
    });
  }

});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: "https://api.parse.com/1/classes/Project",
  subtotal: 0
});

export default {Order, OrderCollection};