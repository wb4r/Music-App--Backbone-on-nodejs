// Dialog Sub-module - CONTROLLER

// --> js/submodule_dialog/controller/controller.js

App.module("Dialog", function(Dialog, App, Backbone, Marionette, $, _) {
  Dialog.Controller = {

    showTracks: function(model) {

      // build url per parts
      var stdURL = "http://0.0.0.0:3000/albums/",
          albumTitleUrl,
          appendUrl = ".json";

      // get url from model
      if (model) {
        albumTitleUrl = model.attributes.title.split(" ").join("%20")
      } else {
        albumTitleUrl = "albums"
      }

      var url = stdURL + albumTitleUrl + appendUrl;

      // Load Albums
      var tracks = new App.Dialog.Entities.Tracks({
        url: url
      });
      tracks.fetch();

      // Albums View
      var tracksView = new App.Dialog.Views.Tracks({
        collection: tracks
      })

      tracksView.on("childview:album:close", function(childView, model) {
        // childView.destroy()
        console.log("destroy");
      })

      tracksView.open()
      App.Dialog.regions.dialogTracks.show(tracksView)

    }
  }

})
