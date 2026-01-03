// 1 java script nature
// the js is a single threaded , synchronous and blocking language
// it has a call stack
// it execute one task at atime

// problem- api call,timer fu,db call
// solution - asynchronous programming , non blocking

// 2 what is asynchronous programming
// start a long task and don't wait for it to finish
// example

const time = setTimeout(() => {
  console.log("the async task");
}, 4000);
console.log("task done");

// js runtime inviroment
// js alone cannot do asynchronous programming
// it needs help from the js runtime enviroment
// browser and node js are the two popular js runtime enviroment

// ------------------------------------------------------------------------------------------------
// js executions runtime architecture
// 1 call stack - execution synchronous code use LIFO(Last in first out )
// example
function a() {
  console.log("A");
}
function b() {
  a();
}
b();

// ---------------------------------------------------------------------------------------------------
// 2️⃣ Web APIs / libuv
// Handles async tasks:
// setTimeout
// fetch / API calls
// DB queries
// File system
setTimeout(() => {
  console.log("Hello");
}, 1000);
// ➡ Code goes to Web API
// ➡ Timer runs in background

// 3️⃣ Callback Queue (Macrotask Queue)
// Contains:
// setTimeout
// setInterval
// setImmediate
// Timer complete → callback placed here

// 4️⃣ Microtask Queue (HIGH PRIORITY ⚡)
// Contains:
// Promise.then
// catch
// finally
// async/await (after await)
// ⚠️ Microtask queue always executes before callback queue
// ----------------------------------------------------------------------------------------------------
// 5️⃣ Event Loop (Controller 🔄)
// Event Loop continuously checks:
// Is Call Stack empty?
// Is Microtask Queue non-empty?
// Is Callback Queue non-empty?
// Executes tasks accordingly.

// ----------------------------------------------------------------------------------------
// waht is clousures
// A function that remembers its outer variables and can access then
// . after the outer functions executions
//
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
let clouser = outer();
clouser();
clouser();
console.log(typeof clouser);

// Closure in Loops (INTERVIEW TRAP ⚠️)
// ❌ Problem
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(() => {
      console.log(x);
    }, 1000);
  })(i);
}
