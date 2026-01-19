// 1️⃣ Check String is Palindrome
// 📌 Definition
// Palindrome wo string hoti hai jo aage se aur peeche se same padhi jaaye.
// Example:
// "madam", "naman"
// 🧠 Logic (Two Pointer Technique)
// Ek pointer start se
// Ek pointer end se
// Dono characters compare
// Agar kabhi mismatch → ❌ false
// ✅ Code

function cheakPalidrome(string) {
  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] !== string[end]) return false;
    start++;
    end--;
  }
  return true;
}

// ⏱️ Complexity
// Time: O(n)
// Space: O(1)

// 🧠 Interview Line
// “We use the two-pointer approach to compare characters from both ends.”
// -----------------------------------------------------------------------------------------------
// 2️⃣ Shortest Distance from Path String (E W N S)
// 📌 Definition

// Di hui directions string (e, w, n, s) se
// final point ka straight distance nikalna.

// 🧠 Direction Rules
// Direction	Effect
// e	x++
// w	x--
// n	y++
// s	y--
// 🧠 Logic
// Start at (0,0)
// Har direction pe x/y update
// Distance formula apply
// ✅ Code
function shortestDistance(paths) {
  let x = 0,
    y = 0;
  let short = 0;
  for (let dir of paths) {
    if (dir === "e") x++;
    else if (dir === "w") x--;
    else if (dir === "n") y++;
    else if (dir === "s") y--;
  }
  short = Math.sqrt(x * x + y * y);
  return short.toFixed(2);
}
console.log(shortestDistance("seewsewsnnsewn"));

// ⏱️ Complexity
// Time: O(n);
// Space: O(1);

// 🧠 Interview Line
// “We calculate net displacement on X and Y axes and apply the distance formula.”
// 📌 Quick Comparison (Yaad rakh)
// Problem	Technique
// Palindrome	Two Pointer
// Shortest Distance	Coordinate system
// ------------------------------------------------------------------------------------------------
// 1️⃣ Normal String (Primitive)
// let a = "hello";
// let b = "hello";

// console.log(a === b); // true

// 🔹 Reason:
// Dono primitive string hain
// Value compare hoti hai

// 2️⃣ String using new keyword (Object)
// let a = new String("hello");
// let b = new String("hello");

// console.log(a === b); // ❌ false

// 🔹 Reason:

// new String() object banata hai
// === me reference compare hota hai
// Dono alag memory location me hain

// 3️⃣ Primitive vs Object Comparison
// let a = "hello";
// let b = new String("hello");

// console.log(a === b); // false
// console.log(a == b);  // true

// Why?
// == → type conversion karta hai

// === → type + value dono check karta hai
// 4️⃣ Value compare karna ho to (BEST WAY ✅)
// let a = new String("hello");
// let b = new String("hello");
// console.log(a.valueOf() === b.valueOf()); // true

// Ya simple 👇
// String(a) === String(b); // true

// 🧠 Interview One-Liner (VERY IMPORTANT 🔥)
// “Strings created using literals are primitives,
//  while strings created using the new keyword are objects, so === compares references, not values.”

// 📌 Rule yaad rakh (Exam Trick)
// Case	Result
// primitive === primitive	✅ true
// object === object	❌ false
// primitive == object	✅ true
// primitive === object	❌ false
// ⚠️ Best Practice (REAL LIFE)

// ❌ Avoid:

// new String("hello");

// ✅ Use:

// "hello";

//-----------------------------------------------------------------------------------------------------------------------

// 🧵 substring() Function (JavaScript)
// 📌 Syntax
// string.substring(startIndex, endIndex)

// startIndex → include hota hai

// endIndex → exclude hota hai

// Original string change nahi hoti (immutable)

// 1️⃣ Basic Example
// let str = "javascript";

// console.log(str.substring(0, 4)); // java
// console.log(str.substring(4));    // script

// 2️⃣ Index Rules (IMPORTANT 🔥)
// 🔹 Start > End (auto swap)
// "hello".substring(4, 1); // ell

// 🔹 Negative index → 0 maan leta hai
// "hello".substring(-2, 3); // hel

// 3️⃣ substring() vs slice() (INTERVIEW FAVORITE)
// Feature	substring	slice
// Negative index	❌ ignore (0)	✅ allowed
// Start > End	auto swap	❌ empty
// Use	beginners	professionals
// "hello".slice(-3);     // llo
// "hello".substring(-3); // hel

// 4️⃣ Common DSA Use Cases
// 🔥 Palindrome using substring
// function isPalindrome(str) {
//   return str === str.substring("").split("").reverse().join("");
// }

// 🔥 Extract word from string
// let s = "DSA is awesome";

// console.log(s.substring(0, 3)); // DSA

// 🔥 Compare substrings
// let s = "coding";

// console.log(s.substring(0, 3) === "cod"); // true

// 🧠 Time & Space Complexity

// Time: O(n)

// Space: O(n) (new string banti hai)

// 🧠 Interview One-Liner

// “substring extracts part of a string between two indexes, excluding the end index.”

// 📌 Exam Trick (Yaad rakh)

// End index kabhi include nahi hota

// Negative index → 0

// String immutable hoti hai
// --------------------------------------------------------------------------------------------------
// 🧠 Logic (Simple)
// Ek string ko max maan lo
// Baaki strings se compare karo
// Jo dictionary me baad me aaye → wo larger
let fruits = ["apple", "mango", "papaya", "graps"];

function findMax(fruits) {
  let max = fruits[0];
  for (let i = 1; i < fruits.length; i++) {
    if (fruits[i] > max) {
      max = fruits[i];
    }
  }
  return max;
}
console.log(findMax(fruits));
// time complexity o(n)
// space comlexity o(1)

// interview line
// “Strings are compared lexicographically based on their Unicode values.”
// -------------------------------------------------------------------------------------------

// string compression
let st = "aaaabbbccc";

function compression(st) {
  let res = "";

  for (let i = 0; i < st.length; i++) {
    let count = 1;

    while (i < st.length - 1 && st[i] === st[i + 1]) {
      count++;
      i++;
    }

    res += st[i] + count;
  }

  return res;
}

console.log(compression(st)); // a4b3c3

// comlexity
// time=o(n)
// space=0(n)
