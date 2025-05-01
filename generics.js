"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var name = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
//identityFour<Bootle> ({})
//----------------//
//generic in array and arrow functions
function getSearchProducts(products) {
    // some datatbase operations
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    // some database operations
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
var Sellabel = /** @class */ (function () {
    function Sellabel() {
        this.cart = [];
    }
    Sellabel.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellabel;
}());
