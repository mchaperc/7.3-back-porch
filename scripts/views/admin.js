import IndividualOrderView from './individual-order';
import {Order, OrderCollection} from '../models/order';

export default Backbone.View.extend({

	template: JST['admin-orders'],
	tagName: 'div',
	className: 'order-container',

	initialize: function() {
		this.render();
		this.listenTo(this.collection, 'add remove', this.render);
	},

	render: function() {
		this.renderChildren();
	},

	renderChildren: function(options){
    	_.invoke(this.children || [], 'remove');


    	this.children = this.collection.map(function(child) {
    			var view = new IndividualOrderView({
        			model: child
      			});
      			this.$el.append(view.el);
      			return view;
    	}.bind(this));
  	},

  	remove: function(){
    	_.invoke(this.children || [], 'remove');
    	Backbone.View.prototype.remove.apply(this, arguments);
  	}

});