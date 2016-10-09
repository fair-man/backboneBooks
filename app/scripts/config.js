require.config({
  paths: {
    jquery: "../bower_components/jquery/dist/jquery.min",
    underscore: "../bower_components/underscore/underscore-min",
    backbone: "../bower_components/backbone/backbone-min",
    handlebars: "../bower_components/handlebars/handlebars.min",
    bootstrap: "../bower_components/bootstrap/dist/js/bootstrap.min",
    ModelBook: "models/ModelBook",
    CollectionBook: "collections/CollectionBook",
    ViewBookBase: "views/ViewBookBase",
    ViewBook: "views/ViewBook"
  },
  shim: {
    "bootstrap": {
      "deps": ["jquery"],
      "exports": "bootstrap"
    }
  }
});

console.log("Module 'config.js' ~~~Loaded~~~");