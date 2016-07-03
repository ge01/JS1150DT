/* JavaScript Arrays
JavaScript arrays are written with square brackets.
Array items are separated by commas.
The following code declares (creates) an array called cars, containing three items (car names):
*/
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[0];

/* JavaScript Objects
JavaScript objects are written with curly braces.
Object properties are written as name:value pairs, separated by commas.
*/
var person = {
  firstName : "John",
  lastName  : "Doe",
  age       : 50,
  eyeColor  : "blue"
};
document.getElementById("demo1").innerHTML = person.firstName + " is " + person.age + " years old.";
