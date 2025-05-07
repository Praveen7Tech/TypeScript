// NameSpace
var Maths;
(function (Maths) {
    function add(a, b) {
        return a + b;
    }
    Maths.add = add;
    function multiply(a, b) {
        return a * b;
    }
    Maths.multiply = multiply;
})(Maths || (Maths = {}));
console.log(Maths.add(2, 3));
console.log(Maths.multiply(2, 3));
