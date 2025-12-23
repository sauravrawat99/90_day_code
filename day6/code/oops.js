// Prototype in js
// the prototype is a mechanism by which js objects inherit features from one another
/*
| Term               | Kya hota hai                                 | Kaha hota hai         | Use                           |
| ------------------ | -------------------------------------------- | --------------------- | ----------------------------- |
| `prototype`        | Ek object jo methods store karta hai         | **Function ke andar** | Inheritance ke liye           |
| `__proto__`        | Internal reference                           | **Object ke andar**   | Prototype ko access karta hai |
| Prototype Chain    | Objects ki linking                           | JS engine ke andar    | Property lookup               |
| `Object.prototype` | Sabse upar wala prototype                    | JS built-in           | Common methods (`toString`)   |
| `hasOwnProperty()` | Check karta hai property khud ki hai ya nahi | Object.prototype      | Debugging                     |
*/

// what is object
// an object is collections of properties ans methods
let person = {
  name: "jhon",
  age: 30,
  greet: function () {
    console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
  },
};
// object accessing properties

// dot notion
// console.log(person.name); // jhon
// bracket notion
// console.log(person["age"]); // 30
person["greet"]();
// -----------------------------------------------------------------------------------------------

// what is constructor function
// a constructor function is a  speacial type of function that is used to creat and
function Car(company, Engine, color) {
  this.company = company;
  this.Engine = Engine;
  this.color = color;
}
let car1 = new Car("BMW", "V6", "Red");
console.log(car1);

Car.prototype.start = function () {
  console.log(`start the car ${this.company}`);
};

let Car2 = new Car("totyota", "v4", "white");
console.log(Car2.start());
