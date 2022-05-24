import { countries, currencies, languages } from "country-data-list";

console.log("here we are!!");
let c = countries.all;
let cr = c.map((ct) => ct.name);
console.log(c);
console.log(cr);
