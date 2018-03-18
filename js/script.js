var maleNames = ['Michał', 'Adam', 'Alojzy', 'Tadeusz', 'Roman'];
var femaleNames = ['Eliza', 'Elżbieta', 'Mieczysława', 'Genowefa', 'Weronika'];
var allNames = maleNames.concat(femaleNames);
console.log(allNames);

var newName = 'Marian';
var allNamesMarian = allNames.concat(newName);

if (allNames.indexOf(newName) === -1) {
  var x = allNames.push(allNames);
} 
else {
  var x = 'Name duplicated';
}

console.log(allNamesMarian);