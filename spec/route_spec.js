var request = require("request"),
    root = "http://localhost:3000/",
    albums;

describe("JSON Routes", function() {
  describe("/albums.json", function() {
    it("returns an array of albums", function(done) {
      request(root + "albums.json", function(e, res, body) {
                  // e === null
                  // res is the response, very large
                  // body is the actual content of the doc albums.json
        albums = JSON.parse(body);
        expect(albums[0].artist).toBeDefined();
        done();
      })
    })
  });
  describe("/albums/1989.json", function() {
    it("returns an album", function(done) {
      request(root + "albums/" + albums[0].title + ".json", function(e, res, body) {
        expect(JSON.parse(body)[0].title).toBeDefined();
        console.log(JSON.parse(body)[0].title);
        expect(JSON.parse(body)[0].title).toBe("Where I Belong");
        done();
      })
    })
  })
})

// 
// var App = {
//   albumsLoaded: function(){},
//   fetchAlbums: function() {
//     this.albums = new Albums();
//     this.albums.fetch({
//       success: this.albumsLoaded.bind(this)
//     });
//   },
//   init: function() {
//     this.fetchAlbums();
//   }
// }
