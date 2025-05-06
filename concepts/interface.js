// interface for class implimentation
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " says hello.."));
    };
    return Dog;
}());
var myDog = new Dog("Thanos");
myDog.speak();
