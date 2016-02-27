// Intro Sub-module - INTRO

// --> js/submodule_intro/controller.js

App.module("Intro", function(Intro, App, Backbone, Marionette, $, _) {

  Intro.Controller = {
    // new Views
    // new Entities
    showIntroAlbums: function() {
      // Load Albums
      var introAlbums = new App.Intro.Entities.Albums();
      introAlbums.fetch();

      // Albums View
      var introAlbumsView = new App.Intro.Views.Albums({
        collection: introAlbums
      })

      App.regions.main.show(introAlbumsView)
    }
  }
})
