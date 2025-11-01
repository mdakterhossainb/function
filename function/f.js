(function sum(a, b) {
    result = a + b;
    console.log(result);
})(5, 6);

function sum(a, b) {
    result = a + b;
    console.log(result);
}
sum(5, 6);
sum(51, 6);
sum(5, 16);
sum(5, 60);

sum(5, 68);

function Person(name, last, age, eye) {
    this.firstName = name;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function () {
        // return this.firstName + " " + this.lastName;
        console.log(`hello ${this.firstName}`);
    };
}

// Create a Person object
const player1 = new Person("akter", 34);
const player2 = new Person("akter", 34);
const player3 = new Person("akter", 34);
const player4 = new Person("akter", 34);
// const myFather = new Person("John", "Doe", 50, "blue");
console.log(player1.firstName);
console.log(player2.age);
// console.log(player3);

// Display full name
// document.getElementById("demo").innerHTML = "My father is " + myFather.fullName();
