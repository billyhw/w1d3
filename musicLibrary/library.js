var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var key in this.playlists) {
    console.log(key + ": " + this.playlists[key].name + " - " + this.playlists[key].tracks.length + " tracks");
  }
}

//library.printPlaylists = printPlaylists;
//library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var key in this.tracks) {
    console.log(key + ": " + this.tracks[key].name + " by " + this.tracks[key].artist + " (" + this.tracks[key].album +")");
  }
}

//library.printTracks = printTracks;
//library.printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  // var playlist = this.playlists.playlistId;
  console.log(playlistId + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");
  var tracks = this.playlists[playlistId].tracks;
  for (var key of tracks) {
    console.log(this.tracks[key].id + ": " + this.tracks[key].name + " by " + this.tracks[key].artist + " (" + this.tracks[key].album +")");
  }
}

library.printPlaylist = printPlaylist;
library.printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId);
}

library.addTrackToPlaylist = addTrackToPlaylist;
library.addTrackToPlaylist('t03','p01');
console.log(library.playlists['p01'].tracks);

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

console.log(uid());

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newID = uid();
  this.tracks[newID] = {
    id: newID,
    name: name,
    artist: artist,
    album: album
  };
}

library.addTrack = addTrack;
library.addTrack("Imagin", "John Lennon", "Best of John Lennon");
console.log(library.tracks);

// adds a playlist to the library

var addPlaylist = function (name) {
  var newID = uid();
  this.playlists[newID] = {
    id: newID,
    name: name,
    tracks: []
  };
}

library.addPlaylist = addPlaylist;
library.addPlaylist("Temporary List");
console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

console.log('\n');

var printSearchResults = function(query) {
  var tracks = this.tracks;
  var goodTracks = [];
//  console.log(tracks);
  for (var key in tracks) {
    if (tracks[key].name.search(query) !== -1 || tracks[key].artist.search(query) !== -1 || tracks[key].album.search(query) !== -1) {
      goodTracks.push(key);
    }
  }
  for (var key of goodTracks) {
    console.log(key + ": " + this.tracks[key].name + " by " + this.tracks[key].artist + " (" + this.tracks[key].album +")");
  }
}

library.printSearchResults = printSearchResults;
library.printSearchResults('Co');