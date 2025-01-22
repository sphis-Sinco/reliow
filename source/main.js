import { JSONS } from "./jsons.js";

var thejson = JSONS;

var moviesbody = document.getElementById("movies");
var showsbody = document.getElementById("shows");

var i = 0
for (i in thejson) {

    var ismovie = thejson[i].type.toLowerCase() == 'movie';

    var divcard = document.createElement('div');
    divcard.className = 'card';
    divcard.style = "width: 18rem;";
    var divcardimg = document.createElement('img');
    divcardimg.src = 'assets/pngs/'+(ismovie ? 'movies' : 'shows')+'/'+thejson[i].png_file_location;
    divcardimg.className = "card-img-top"
    divcard.appendChild(divcardimg);
    var divcarddiv = document.createElement('div');
    divcarddiv.class = "card-body";
    var carddiveheader = document.createElement('h5');
    carddiveheader.class = "card-title";
    carddiveheader.innerHTML = thejson[i].title;
    divcarddiv.appendChild(carddiveheader);
    var carddivpara = document.createElement('p');
    carddivpara.className = "card-text";
    carddivpara.innerHTML = thejson[i].release_date + ' ('+(thejson[i].speculation == true ? 'SPECULATED' : 'OFFICIAL')+' RELEASE IN '+thejson[i].place.toUpperCase()+')';
    divcarddiv.appendChild(carddivpara);
    var carddivlink = document.createElement('a');
    carddivlink.href = thejson[i].source;
    carddivlink.class = "btn btn-primary";
    carddivlink.innerHTML = "Source";
    if (thejson[i].source != null) divcarddiv.appendChild(carddivlink);
    divcard.appendChild(divcarddiv);


    if (ismovie) {
        moviesbody.appendChild(divcard);
        moviesbody.appendChild(document.createElement('br'));
    } else {
        showsbody.appendChild(divcard);
        showsbody.appendChild(document.createElement('br'));
    }

    i++;
}

/**
 * <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
 */

/*
var divcard = document.createElement('div');
divcard.className = 'card';
divcard.style = "width: 18rem;";
var divcardimg = document.createElement('img');
divcardimg.src = 'assets/pngs/movies/sonic 4.jpeg';
divcardimg.className = "card-img-top"
divcard.appendChild(divcardimg);
var divcarddiv = document.createElement('div');
divcarddiv.class = "card-body";
var carddiveheader = document.createElement('h5');
carddiveheader.class = "card-title";
carddiveheader.innerHTML = "Card title";
divcarddiv.appendChild(carddiveheader);
var carddivpara = document.createElement('p');
carddivpara.className = "card-text";
carddivpara.innerHTML = "Lorem";
divcarddiv.appendChild(carddivpara);
var carddivlink = document.createElement('a');
carddivlink.href = "#";
carddivlink.class = "btn btn-primary";
carddivlink.innerHTML = "Source";
divcarddiv.appendChild(carddivlink);
divcard.appendChild(divcarddiv);
document.body.append(divcard);
*/