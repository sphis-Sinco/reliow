import { getJSON } from "./util/readFile.js";

var thejson = getJSON("sonic4");

var p = document.createElement("p");
p.innerHTML = thejson;
document.body.appendChild(p)