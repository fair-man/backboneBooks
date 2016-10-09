define([
  "jquery",
  "underscore",
  "backbone",
  "ModelBook"
], function ($, _, Backbone, ModelBook) {
  var CollectionBook = Backbone.Collection.extend({
    model: ModelBook,
    comparator: function (data) {
      return data.get("bookTitle");
    }
  });
  return CollectionBook;
});