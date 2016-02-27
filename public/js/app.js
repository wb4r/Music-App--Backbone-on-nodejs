// Main App - APPLICATION

// --> js/app.js

var App = new Marionette.Application();


App.on("before:start", function() {
  var Layout = Marionette.LayoutView.extend({
    el: "#app-container",
    regions: {
      main: "#main-region"
    }
  })

  App.regions = new Layout();
})

App.on("start", function() {
  App.Intro.Controller.showIntroAlbums();
})
