import Urheilija from "./Urheilija.mjs";

let urheilija = new Urheilija(
  "saku",
  "pekkanen",
  "saku1",
  "1993",
  "www.linkki.web",
  80,
  "hiihto",
  "sm-kulta"
);
let urheilija2 = new Urheilija(
  "eero",
  "sakunen",
  "eero2",
  "2000",
  "www.kuva.net",
  78,
  "juoksu",
  "piirimestaruus"
);
console.log(urheilija._etunimet + " " + urheilija._sukunimi);
urheilija._etunimet = "Saku Eero";
urheilija._sukunimi = "Pekkanen";
console.log(urheilija._etunimet + " " + urheilija._sukunimi);
