/*
✅ What is window? (Simple & Clear)
window is the global object of the browser.
It represents the entire browser tab where your web page runs.

key points about window:
1.top lavel object: In a browser, window is the top-level object
. All global variables and functions become properties and methods of the window object.

what does window contain
the window object contains:
1.document object: represents the web page loaded in the browser.
2.BOM (browser object model): to interact with browser components like history, location, navigator, screen etc.
3.Timers: methods like setTimeout() and setInterval() for scheduling code execution.
4.Dialog boxes: methods like alert(), confirm(), and prompt() for user interaction.
5.Storage: access to localStorage and sessionStorage for storing data on the client side.
6.Other APIs: various web APIs like Fetch API, WebSocket, and more.

what is bom
BOM stands for Browser Object Model.
It provides methods and properties to interact with the browser outside of the document content.
*/
// BOM ke MAIN OBJECTS
// 1️⃣ window.location (URL Control)

// 👉 Current page ka URL, redirect, reload
// url = window.location.href; // current page URL
console.log(location.href);
// page reload
// console.log(location.reload());
// redirect to another page
// location.href = "/login";

// 2️⃣ window.history (Browser History Control)

// ek page piche
window.history.back();

// ek page aage
history.forward();

// go to specific page in history
// history.go(-2); // 2 pages back

// 3️⃣ window.navigator (Browser Info)
// 👉 User ka browser & device info
//
console.log(navigator.userAgent);

console.log(navigator.onLine); // internet connected?
console.log(navigator.language); // browser language

// 4️⃣ window.screen (Screen Info)
// 👉 User ke screen ka size

console.log(screen.width);
console.log(screen.height);

console.log(window.innerWidth);
console.log(window.innerHeight);
// use case: responsive design ke liye screen size check karna

// 5️⃣ Alerts & Dialogs (Important 🔥
// alert("Hello"); // message
// confirm("Are you sure?"); // true / false
// prompt("Enter name"); // input

// 6️⃣ Timers (Very Important 🔥)
// ⏱ setTimeout
let settime = setTimeout(() => {
  console.log("Run after 2 seconds");
}, 2000);

// 🔁 setInterval
let set = setInterval(() => {
  console.log("Run every 1 second");
}, 1000);
clearInterval(set);
clearTimeout(settime);

// 🔑 BOM ka Structure (Yaad Rakhna)
// window
//  ├── location
//  ├── history
//  ├── navigator
//  ├── screen
//  ├── alert / confirm / prompt
// ------------------------------------------------------------------------------------------
/*
what is dom 
The dom is document object model to use to intrect with html elements

key points
everyTag=Elemrnt_Node
text=text_Node
document=rood_Node

browser create always dom tree;
---------------------------------------------------------------------------------------------

| Object   | Use                     |
| -------- | ----------------------- |
| document | HTML page               |
| element  | HTML tag                |
| node     | Any item in DOM         |
| window   | Browser (DOM ka parent) |
----------------------------------------------------------------------------------------------------

how to access dom elements(old way)
1. getElementById()
2. getElementsByClassName()
3.getElementsByTagName()

new way
document.querySelector("#id")
document.querySelector(".class")
document.querySelectorAll(".item")
--------------------------------------------------------------------------------------------
dom content change (html/text)
el.textContent = "Hello"
el.innerText = "Hello"
el.innerHTML = "<b>Hello</b>"
| Property    | HTML allowed | Hidden text |
| ----------- | ------------ | ----------- |
| textContent | ❌            | ✅           |
| innerText   | ❌            | ❌           |
| innerHTML   | ✅            | ❌           |

User input ke saath innerHTML avoid karo (XSS risk)
----------------------------------------------------------------------------------------------
DOM ATTRIBUTES (ID, SRC, VALUE)
el.getAttribute("id")
el.setAttribute("class","box")
el.removeAttribute("disabled")

OR shortcut 👇
input.value = "Saurav"
img.src = "pic.jpg"

 DOM STYLE & CLASS CONTROL
 bad practice
 el.style.color = "red"

 best practice
 el.classList.add("active")
el.classList.remove("active")
el.classList.toggle("active")
el.classList.contains("active")

----------------------------------------------------------------------------------------------
CREATE / ADD / REMOVE ELEMENTS
const li = document.createElement("li")
li.innerText = "Task 1"

add to dom
parent.appendChild(li)
parent.prepend(li)


li.remove()
parent.removeChild(li)
----------------------------------------------------------------------------------------------
dom traversing(tree)

el.parentElement
el.children
el.firstElementChild
el.lastElementChild
el.nextElementSibling
el.previousElementSibling
----------------------------------------------------------------------------------------------
what is event listener
An event listener is a function that waits for a specific event to occur on a particular
 element, such as a click, hover, or keypress. When the event occurs,
  the event listener executes the associated function, 
  allowing you to respond to user interactions and other events in your web application.
  
EVENTS (USER INTERACTION)
btn.addEventListener("click", function () {
  console.log("Clicked")
})
Common Events
click
input
submit
change
keydown / keyup
mouseover
----------------------------------------------------------------------------------------------
Event Object (e)
btn.addEventListener("click", (e) => {
  e.target
  e.preventDefault()
})
--------------------------------------------------------------------------------------------------
Event Bubbling & Capturing ⭐

Bubbling (default)
child → parent → body → document

Capturing
parent → child
addEventListener("click", handler, true)
-----------------------------------------------------------------------------------------------
Event Delegation (ADVANCE & IMPORTANT)
parent ko event and child ko handle

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.innerText)
  }
})

performace bater
Dynamic elements ke liye best

------------------------------------------------------------------------------------------------
DOM READY (JS kab chale?)
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Ready")
})

OR script ko body ke end me rakho ✔

FORMS & INPUT HANDLING
form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log(input.value)
})
-----------------------------------------------------------------------------------------------
DATASETS (HTML → JS)
<button data-id="101">Click</button>
btn.dataset.id // "101"
-----------------------------------------------------------------------------------------
DOM PERFORMANCE TIPS (ADVANCE)
bad 
for (...) {
  document.body.appendChild(el)
}
goood 
const frag = document.createDocumentFragment()
frag.appendChild(el)
document.body.appendChild(frag)


*/
