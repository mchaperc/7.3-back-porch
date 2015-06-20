this["JST"] = this["JST"] || {};
this["JST"]["cart-order"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"your-cart-values\">\n	<p class=\"your-cart-values-item\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n	<p class=\"your-cart-values-price\">$ "
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.foods : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"cart-divide\"></div>\n<div class=\"your-cart-tally\">\n	<h4 class=\"your-cart-tally-label\">Subtotal</h4>\n	<h4 class=\"your-cart-tally-subtotal\">$ "
    + this.escapeExpression(((helper = (helper = helpers.subtotal || (depth0 != null ? depth0.subtotal : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"subtotal","hash":{},"data":data}) : helper)))
    + "</h4>\n</div>\n\n<button class=\"submit-order\"><i class=\"fa fa-check fa-2x\"></i></button>";
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