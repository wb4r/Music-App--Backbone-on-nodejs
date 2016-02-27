// Intro Sub-module - ENTITIES

// --> js/submodule_intro/entities/entities.js

App.module("Intro.Entities", function(Entities, App, Backbone, Marionette, $, _) {
  Entities.Album = Backbone.Model.extend({
    defaults: {
      artist:   "",
      title:    "",
      url:      "",
      date:     "",
      cover:    ""
    }
  });

  Entities.Albums = Backbone.Collection.extend({
    url: "http://0.0.0.0:3000/albums.json",
    model: Entities.Album
  })
})
