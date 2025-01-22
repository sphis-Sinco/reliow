import { JSONS } from "./jsons.js";

var thejson = JSONS
var p = document.createElement("p");
p.innerHTML = thejson[0].title;
document.body.appendChild(p)