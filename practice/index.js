"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "praveen";
var age = 25;
var isCool = true;
function greet(name) {
    return "Hello ".concat(name);
}
console.log(greet(name));
console.log("age", age);
console.log("name", name);
//Array & objects
var scores = [1, 2, 3, 4, 5];
var people = [
    { name: "praveen", age: 25 },
    { name: "rohith", age: 27 },
    { name: "felwin", age: 22 }
];
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    console.log("".concat(person.name, " is ").concat(person.age, " years old."));
}
function filterAdults(people, minAge) {
    return people.filter(function (person) { return person.age > minAge; });
}
var adults = filterAdults(people, 23);
console.log(adults);
