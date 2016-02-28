// Dialog Sub-module - MODULE

// --> js/submodule_dialog/app.js

App.module("Dialog", function(Dialog, App, Backbone, Marionette, $, _) {

  Dialog.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "albums/:title"   :   "getAlbum"
    }
  })

  var API = {
    getAlbum: function(title) {
      App.Dialog.Controller.showTracks(title)
    }
  };



  Dialog.on("start", function() {
    new Dialog.Router({
      controller: API
    })
  })
})



App.Dialog.on("before:start", function() {
  var Layout = Marionette.LayoutView.extend({
    el: "#overlay",
    regions: {
      dialogHeader: "#dialogHeader",
      dialogTracks: "#dialogTracks",
    }
  });

  App.Dialog.regions = new Layout();
})
