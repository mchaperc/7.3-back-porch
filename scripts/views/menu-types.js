import MenuItemView from './menu-items';

export default Backbone.View.extend({

	template: JST['menu-types'],

	tagName: 'div',
	className: 'main-menu-categories-container',
	hidden: true,

	events: {
		'click .main-menu-categories-container': 'showChildren',
	},
	
	initialize: function(options){
    	this.type = options.type;
    	this.order = options.order;
    	this.render(options);
    	// console.log('menuTypes', options.type, this.collection);
  	},

  	render: function(options){
  		this.$el.html(this.template(this.type));
    	this.renderChildren(options);
  	},

  	renderChildren: function(options){
    	_.invoke(this.children || [], 'remove');

    	this.order = options.order;

    	this.alreadyRendered = [];

    	this.children = this.collection.map(function(child) {
    			var view = new MenuItemView({
        			model: child,
        			collection: this.collection,
        			order: this.order
      			});
      			this.$el.append(view.el);
      			return view;
    	}.bind(this));
  	},

  	remove: function(){
    	_.invoke(this.children || [], 'remove');
    	Backbone.View.prototype.remove.apply(this, arguments);
  	},

  	showChildren: function() {
  		console.log('hi');
  	}

});