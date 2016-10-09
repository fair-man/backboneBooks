define([
  "jquery",
  "underscore",
  "backbone",
  "handlebars",
  "CollectionBook",
  "ViewBook",
  "ModelBook"
], function ($, _, Backbone, Handlebars, CollectionBook, ViewBook, ModelBook) {
  var ViewBookBase = Backbone.View.extend({
    "el": ".book-container",
    "events": {
      "click .btn-add": "addBook"
    },
    initialize: function (initModel) {
      var self = this;
      self.collection = new CollectionBook(initModel);
      this.listenTo( this.collection, 'add', this.renderBook );
      self.render();
    },
    render: function () {
      var self = this;
      self.collection.each(function (item) {
        console.log(item)
        self.renderBook(item);
      });
    },
    renderBook: function (item) {
      var self = this;
      var viewBook = new ViewBook({
        model: item
      });
      self.$el.find(".books-block").append( viewBook.render().el );
    },
    addBook: function (e) {
      e.preventDefault();
      var formData = {};
      $('#book').find('.form-control').each( function( i, el ) {
        if( $( el ).val() != '' ){
          formData[ el.id ] = $( el ).val();
        }
      });
      console.log(formData)
      this.collection.add( new ModelBook( formData ) );
    }
  });

  return ViewBookBase;
});