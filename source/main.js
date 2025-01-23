import { JSONS } from "./jsons.js";

var thejson = JSONS;

var moviesbody = document.getElementById("movies");
var showsbody = document.getElementById("shows");

var i = 0;
for (i in thejson) {

  var ismovie = thejson[i].movie;
  var divcard = document.createElement('div');

  // 'assets/pngs/'+(ismovie ? 'movies' : 'shows')+'/'+thejson[i].png_file_location;
  // thejson[i].title + ' - ' + thejson[i].release_date + ' ('+(thejson[i].speculation == true ? 'SPECULATED' : 'OFFICIAL')+' RELEASE IN '+thejson[i].place.toUpperCase()+')';

  var curbody = (ismovie) ? moviesbody : showsbody;
  curbody.appendChild(divcard);

  i++;
}