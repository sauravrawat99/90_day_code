// conditions oin js

let age = 20;
if (typeof age === "number") {
  console.log("yes this is number ");
} else {
  console.log("no this is not a number");
}
// when use typeof operator then it will return the type of variable in string format

let array = [];
if (typeof array === "array") {
  console.log("yes this is array ");
} else {
  console.log("no this is not a a");
}
// it will return no this is not a a because typeof operator will return object for array
if (typeof array === "object") {
  console.log("yes this is array ");
} else {
  console.log("no this is not a array");
}
// ----------------------------------------------------------------------------------------------

/*write a function name "makeatea" that takin a sinle parameter typeoftea and return a string 
// "making green tea" when call with "green" and store the returned value in a variable named "teaOrder" */
function makeatea(typeoftea) {
  if (typeoftea === "green") {
    return "making a green tea";
  }
}
let teaOrder = makeatea("green");
// console.log(teaOrder);

function tearder(teaType) {
  function confirm() {
    return `order confIrmOrder a ${teaType}tea`;
  }
  confirm();
}

let order = tearder("black");
console.log(order);
