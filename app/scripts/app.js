define([
  "jquery",
  "underscore",
  "backbone",
  "handlebars",
  "ViewBookBase",
  "bootstrap"
], function ($, _, Backbone, Handlebars, ViewBookBase) {
  var app = {};
  var books = [
    { bookTitle: 'JavaScript: The Good Parts', bookAuthor: 'Douglas Crockford',
      bookDate: '2008', bookDescription: 'JavaScript Programming' },
    { bookTitle: 'The Little Book on CoffeeScript', bookAuthor: 'Alex MacCaw',
      bookDate: '2012', bookDescription: 'CoffeeScript Programming' },
    { bookTitle: 'Scala for the Impatient', bookAuthor: 'Cay S. Horstmann',
      bookDate: '2012', bookDescription: 'Scala Programming' },
    { bookTitle: 'American Psycho', bookAuthor: 'Bret Easton Ellis',
      bookDate: '1991', bookDescription: 'Novel Splatter' },
    { bookTitle: 'Eloquent JavaScript', bookAuthor: 'Marijn Haverbeke',
      bookDate: '2011', bookDescription: 'JavaScript Programming' }
  ];

  app.view = new ViewBookBase(books);

  console.log("Module 'app.js' ~~~Loaded~~~");
  return app;
});