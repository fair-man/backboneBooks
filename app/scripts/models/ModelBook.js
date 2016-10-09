define([
  "jquery",
  "underscore",
  "backbone"
], function ($, _, Backbone) {
  var ModelBook = Backbone.Model.extend({
    defaults: {
      bookImageSrc: false,
      bookTitle: "Unknown title",
      bookAuthor: "Unknown author",
      bookDate: "Unknown date",
      bookDescription: "Unknown description"
    }
  });
  return ModelBook;
});