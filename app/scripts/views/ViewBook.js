define([
  "jquery",
  "underscore",
  "backbone",
  "handlebars"
], function ($, _, Backbone, Handlebars) {
  var ViewBook = Backbone.View.extend({
    "tagName": "div",
    "className": "col-lg-6 books-item",
    "template": Handlebars.compile($("#books-block").html()),
    "events": {
      "click .btn-remove": "removeBook"
    },
    initialize: function () {},
    render: function () {
      var self = this;
      self.$el.html(self.template(self.model.toJSON()));
      return self;
    },
    removeBook: function () {
      var self = this;
      self.model.destroy();
      self.remove();
    }
  });
  return ViewBook;
});