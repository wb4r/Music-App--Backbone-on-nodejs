// Dialog Sub-module - ENTITIES

// --> js/submodule_dialog/entities/entities.js

App.module("Dialog.Entities", function(Entities, App, Backbone, Marionette, $, _) {

  Entities.Track = Backbone.Model.extend({
    urlRoot: "http://0.0.0.0:3000/albums/",
    url: function() {
      var url = this.urlRoot + this.title + ".json";
      return url;
    },
    defaults: {
      title: "",
      length: ""
    }
  });

  Entities.Tracks = Backbone.Collection.extend({
    model: Entities.Track,
    url: "",
    initialize: function(options) {
      this.url = options.url
    },

  })
})
