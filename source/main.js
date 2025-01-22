import { JSONS } from "./jsons.js";

var thejson = JSONS;

var moviesbody = document.getElementById("movies");
var showsbody = document.getElementById("shows");

var i = 0
for (i in thejson) {
    var p = document.createElement("p");
    
    p.innerHTML = thejson[i].title + ' - ' + thejson[i].release_date + (thejson[i].speculation == true ? ' (SPECULATION)' : ' (OFFICIAL)');

    if (thejson[i].type.toLowerCase() == 'movie')
        moviesbody.appendChild(p);
    else
        showsbody.appendChild(p);

    i++;
}
