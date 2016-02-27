// Intro Sub-module - VIEWS

// --> js/submodule_intro/views/views.js

App.module("Intro.Views", function(Views, App, Backbone, Marionette, $, _) {
  Views.Album = Marionette.ItemView.extend({
    template: "#intro-album",
    className: "col-xs-4"
  });

  Views.Albums = Marionette.CompositeView.extend({
    template: "#intro-albums",
    childView: Views.Album,
    childViewContainer: ".row"
  })
})
