// Dialog Sub-module - MODULE

// --> js/submodule_dialog/app.js

App.module("Dialog", function(Dialog, App, Backbone, Marionette, $, _) {

})

App.Dialog.on("before:start", function() {
  var Layout = Marionette.LayoutView.extend({
    el: "#app-container",
    regions: {
      dialogHeader: "#dialogHeader",
      dialogTracks: "#main-region"
    }
  });

  App.Dialog.regions = new Layout();
})

App.Dialog.on("start", function() {
  App.Dialog.Controller.showTracks();
})
