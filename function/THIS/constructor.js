function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function () {
        // return this.firstName + " " + this.lastName;
        console.log(`hello ${this.first}`);
    };
}

// Create a Person object
const player1 = Person("akter");
const myFather = new Person("John", "Doe", 50, "blue");

// Display full name
document.getElementById("demo").innerHTML = "My father is " + myFather.fullName();
