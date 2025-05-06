// class User {
//     readonly id : number
//     constructor (
//         public email : string,
//         public name : string,
//         private userid : number
//         ){
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const prave =new User("praveen@gmail.com","haii",1)
//-----------------//
// GETTERS AND SETTERS
var User = /** @class */ (function () {
    function User(email, name, userid) {
        this.email = email;
        this.name = name;
        this.userid = userid;
        // while using the protector it acts like private and is use in the another class that inherits this parent
        this._courseCount = 1;
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    subUser.prototype.chageCourseCount = function () {
        this._courseCount = 2;
    };
    return subUser;
}(User));
var prave = new User("praveen@gmail.com", "haii", 1);
