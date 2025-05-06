// Infer Types (Implicit Types)
var userDetails = {
    name: "praveen",
    age: "25", // union
    place: "kochi",
    salary: 50000,
};
function getUserName(userDetails) {
    return userDetails.name;
}
getUserName(userDetails);
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2); // 4
add("2", "2"); // 22
// Generics (infer data types)
function getAge(age) {
    return age;
}
getAge("25");
getAge(25);
