// Dialog Sub-module - VIEWS

// --> js/submodule_dialog/views/views.js

App.module("Dialog.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.Track = Marionette.ItemView.extend({
    template: "#dialog-track",
    // className: "col-xs-10"
  });

  Views.Tracks = Marionette.CollectionView.extend({
    template: "#dialog-tracks",
    childView: Views.Track,
    childViewContainer: ".row"
  })

})
