// Intro Sub-module - INTRO Controller

// --> js/submodule_intro/controller.js

App.module("Intro", function(Intro, App, Backbone, Marionette, $, _) {

  Intro.Controller = {
    showIntroAlbums: function() {
      // Load Albums
      var introAlbums = new App.Intro.Entities.Albums();
      introAlbums.fetch();

      // Albums View
      var introAlbumsView = new App.Intro.Views.Albums({
        collection: introAlbums
      })

      introAlbumsView.on("childview:album:show", function(childView, model) {
        App.Dialog.Controller.showTracks(model)
      })

      App.regions.main.show(introAlbumsView)
    }
  }
})
