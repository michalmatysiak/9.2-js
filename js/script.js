var maleNames = ["Michał", "Adam", "Alojzy", "Tadeusz", "Roman"];
var femaleNames = ["Eliza", "Elżbieta", "Mieczysława", "Genowefa", "Weronika"];
var allNames = maleNames.concat(femaleNames);
console.log(allNames);

var newName = "Eliza";

if (allNames.indexOf(newName) === -1) {
	var x = allNames.push(newName);
} else {
	var x = "Name duplicated";
}
console.log(x);
console.log(allNames);
