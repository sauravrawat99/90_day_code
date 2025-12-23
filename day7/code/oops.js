// what is prototype
// the prototype is a mecnisham by which js object inherit feachers from one another

// example: object me se method kaha se aate hai
// 🔹 Proof: Object me method kaha se aata hai?
// let arr = [1, 2, 3];
// arr.push(4);
// ❓ push() kaha se aaya?
// 👉 Array.prototype se

function User(name, age) {
  this.name = name;
  this.age = age;
  User.prototype.display = function () {
    console.log(`hy my name is ${this.name} and i am ${this.age} year old`);
  };
}
let u1 = new User("jhon", 30);
u1.display();

// Behind the scenes:

// u1
//  ↓ (__proto__)
// User.prototype
//  ↓
// Object.prototype
//  ↓
// null
// 🔹 __proto__ vs prototype (CONFUSION CLEAR)
// prototype	proto
// Function ka property	Object ka internal reference
// Inheritance define karta	Prototype ko point karta
// u1.__proto__ === User.prototype // true

// 🔹 Prototype ka main fayda 🔥

// ❌ Without prototype:

// Har object ke liye new function

// Memory waste

// ✅ With prototype:

// Method ek hi jagah

// Sab objects share karte hain

/*
✅ DAY 4: CLASS (JavaScript)
What is a Class?

A class is a blueprint to create objects.
In JavaScript, class is syntactic sugar over constructor functions and prototypes.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  login() {
    console.log(this.name + " logged in");
  }
}

let u1 = new User("Saurav", 20);

Important Truth
typeof User; // "function"


👉 JavaScript is prototype-based, not truly class-based.

Interview Questions

Is JavaScript class-based?

❌ No, it is prototype-based.

Where are class methods stored?

In ClassName.prototype

Are classes hoisted?

❌ No

✅ DAY 5: INHERITANCE (extends, super())
What is Inheritance?

Inheritance allows a child class to access parent class properties and methods.

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }
}

let s = new Student("Saurav", "BTech");

Rules

extends → creates prototype chain

super() → must be called before using this

Interview Questions

How does inheritance work in JS?

Through prototype chain

What does super() do?

Calls parent constructor or method

✅ DAY 6: ENCAPSULATION
What is Encapsulation?

Hiding data and allowing access through controlled methods.

Using Private Fields (#)
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

Benefits

Data security

Validation

Controlled access

Interview Questions

What is encapsulation?

Data hiding + controlled access

Does JS support true encapsulation?

✅ Yes, using private fields (#)

✅ DAY 7: POLYMORPHISM
What is Polymorphism?

Same method name, different behavior.

Method Overriding
class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

Important Note

JavaScript ❌ does NOT support method overloading directly

It supports method overriding

Interview Questions

What is polymorphism?

Same interface, different behavior

Does JS support method overloading?

❌ No (directly)

✅ DAY 8: ABSTRACTION
What is Abstraction?

Showing what to do, hiding how it is done.

class Car {
  start() {
    this.#engineStart();
    console.log("Car started");
  }

  #engineStart() {
    console.log("Engine logic hidden");
  }
}

Interview Questions

What is abstraction?

Hiding implementation details

Does JS have abstract classes?

❌ No (TypeScript does)

✅ DAY 9: STATIC METHODS & PROPERTIES
What is Static?

Static members belong to the class, not the object.

class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

MathUtil.add(2, 3);


❌

let m = new MathUtil();
m.add(); // error

Interview Questions

What is a static method?

A method that belongs to the class

Are static methods inherited?

✅ Yes

✅ DAY 10: COMPOSITION vs INHERITANCE
Inheritance (IS-A)
class Dog extends Animal {}

Composition (HAS-A)
class Engine {
  start() {}
}

class Car {
  constructor() {
    this.engine = new Engine();
  }
}

Rule (Interview Gold)

Prefer composition over inheritance

Interview Questions

Difference between inheritance and composition?

Which one is more flexible?

Composition

✅ DAY 11: this KEYWORD (VERY IMPORTANT)
Rule

this depends on how a function is called, not where it is written.

Cases
Object method
user.greet(); // this = user

Constructor
new User(); // this = new object

Arrow function
() => {} // this = lexical (parent scope)

call / apply / bind
fn.call(obj);

Interview Questions

What is this?

Current execution context

Why arrow functions don’t have this?

They inherit it from parent scope

🏁 FINAL INTERVIEW SUMMARY (VERY IMPORTANT)

JavaScript is prototype-based

class is syntactic sugar

Inheritance works via prototype chain

Encapsulation = data protection

Polymorphism = method overriding

Abstraction = hide implementation

Static = class-level logic

Prefer composition

this depends on function call */
