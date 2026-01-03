// what is object
// the object is a collection of properties and methods

// example of object
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // Output: Hello, John
// -------------------------------------------------------------------------------------------------
// How many ways to create an object
// 1. object literal
const Car = {
  brand: "toyota",
  model: "2021",
  start: function () {
    console.log(`The ${this.brand} ${this.model} is starting.`);
  },
};
Car.start();
// ------------------------------------------------------------------------------------------------
// Constructor function
function Phone(brand, name) {
  this.brand = brand;
  this.name = name;
}
const Phone1 = new Phone("samsung", "s24");
const Phone2 = new Phone("iphone", "17");
console.log(Phone1);
// ------------------------------------------------------------------------------------------------
//  new Object() Constructor
// 👉 JavaScript ka built-in Object constructor
const user = new Object();
user.name = "Saurav";
user.age = 20;
// ⚠️ Rarely used (object literal better hota hai)
// ---------------------------------------------------------------------------------------------

// Es6 Classes (modern way )
class Man {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`hello ${this.name}your age is ${this.age} correct`);
  }
}
// Man.greet();
const man1 = new Man("saurav", 22);
console.log(man1);
man1.greet();
// -----------------------------------------------------------------------------------------------
// object.Creat
const Bike = {
  greet() {
    console.log(`hello my brother `);
  },
};
const Bike1 = Object.create(Bike);
Bike1.name = "royal";
Bike1.model = "2021";

console.log(Bike1);

// Use when:
// Prototype control chahiye
// Advanced JS concepts
// --------------------------------------------------------------------------------------------------
// factory functions
function createUser(name, age) {
  return {
    name,
    age,
  };
}

const user1 = createUser("Saurav", 20);
console.log(typeof user1);

// Use when:
// Simple reusable object creation
// Avoid this confusion
// ----------------------------------------------------------------------------------------------
// Singleton Object
// 👉 Sirf ek hi object instance chahiye

const appConfig = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

// Use when:
// Config
// Global state
