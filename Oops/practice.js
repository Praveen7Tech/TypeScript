"use strict";
// Getters ans Setters
Object.defineProperty(exports, "__esModule", { value: true });
function getValue(obj, key) {
    return obj[key];
}
var person = { name: "Alice", age: 30 };
var name = getValue(person, "name"); // ✅ OK, type is string
