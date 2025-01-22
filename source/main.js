import { JSONS } from "./jsons.js";

var thejson = JSONS;

var moviesbody = document.getElementById("movies");
var showsbody = document.getElementById("shows");

var i = 0
for (i in thejson) {
    var p = document.createElement("p");
    var img = document.createElement("img");

    var ismovie = thejson[i].type.toLowerCase() == 'movie';
    
    p.innerHTML = thejson[i].title + ' - ' + thejson[i].release_date + (thejson[i].speculation == true ? ' (SPECULATION)' : ' (OFFICIAL)');
    img.src = 'assets/pngs/'+(ismovie ? 'movies' : 'shows')+'/'+thejson[i].png_file_location
    img.width = 100;

    if (ismovie) {
        moviesbody.appendChild(p);
        moviesbody.appendChild(img);
    } else {
        showsbody.appendChild(p);
        showsbody.appendChild(img);
    }

    i++;
}
