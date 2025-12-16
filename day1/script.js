let arr = [10, 20, 30, 40, 50, 60, 70, 80];
let sum = 0;

for (let index = 0; index < arr.length - 1; index++) {
  sum += arr[index];
  if (index === arr.length) {
    return console.log("final", sum);
  }
  console.log(sum);
}

let name = "sauravrawat";
let age = 21;

function intro() {
  console.log(`hello mY name ${name} i am from madhaya pradesh gwalior${age}`);
}

intro();

// 5️⃣ Write a function that prints:

// “Adult” if age >= 18
// “Minor” if age < 18

function comp(age) {
  if (age >= 18) {
    console.log("adult");
  }
  if (age < 18) {
    console.log("minor");
  }
}
comp(15);
