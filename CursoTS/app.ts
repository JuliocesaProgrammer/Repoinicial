const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

person.greet(); // Outputs: Hello, my name is John Doe and I am 30 years old.