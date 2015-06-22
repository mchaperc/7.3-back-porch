this["JST"] = this["JST"] || {};
this["JST"]["admin-orders"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["cart-order"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"your-cart-values\">\n	<p class=\"your-cart-values-item\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n	<p class=\"your-cart-values-price\">$ "
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n";
},"3":function(depth0,helpers,partials,data) {
    return " disabled ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.foods : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"cart-divide\"></div>\n<div class=\"your-cart-tally\">\n	<h4 class=\"your-cart-tally-label\">Subtotal</h4>\n	<h4 class=\"your-cart-tally-subtotal\">$ "
    + this.escapeExpression(((helper = (helper = helpers.subtotal || (depth0 != null ? depth0.subtotal : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"subtotal","hash":{},"data":data}) : helper)))
    + "</h4>\n</div>\n\n<button class=\"submit-order\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.noFoods : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "><i class=\"fa fa-check fa-2x\"></i></button>";
},"useData":true});
this["JST"]["contact-form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2 class=\"contact-form-heading\">Welcome to the Back Porch!</h2>\n<p class=\"contact-form-heading-text\">Thank you for visiting us. We hope you'll take the time to set up your user account so that we can better serve you in the future.</p>\n\n<input type=\"text\" class=\"name-input\" placeholder=\"Name\" required>\n<input pattern='\\d{3}[\\-]\\d{3}[\\-]\\d{4}' title='Phone Number (Format: 555-555-5555)'type=\"tel\" class=\"phone-input\" placeholder=\"Phone Number\" required>\n<input type=\"email\" class=\"email-input\" placeholder=\"Email Address\" required>\n<textarea class=\"address-input\" placeholder=\"Street Address\" required></textarea>\n<a href=\"#\" class=\"return-to-menu\" title=\"Submit Contact and return to Menu\"><button class=\"submit-contact\">Submit</button></a>";
},"useData":true});
this["JST"]["individual-order"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"food-item\">\n			"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n		</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "\n	<h3 class=\"order-id\">Order ID: "
    + this.escapeExpression(((helper = (helper = helpers.objectId || (depth0 != null ? depth0.objectId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"objectId","hash":{},"data":data}) : helper)))
    + "</h3>\n	<ul class=\"food-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.foods : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n	<button class=\"order-completed\"><i class=\"fa fa-check\"></i> Order Complete</button>\n";
},"useData":true});
this["JST"]["menu-collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["menu-item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <li class=\"main-menu-categories-items-item\">\n    <button class=\"item-price\">$"
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</button>\n    <h4>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n    <p>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n  </li>";
},"useData":true});
this["JST"]["menu-types"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"main-menu-categories-type\">\n  <i class=\"fa fa-chevron-down main-menu-categories-type-expand\"></i><i class=\"fa fa-chevron-up main-menu-categories-type-expand\"></i>\n  <h3 class=\"main-menu-categories-type-text\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</h3>\n</div>\n<ul class=\"main-menu-categories-items\"></ul>";
},"useData":true});