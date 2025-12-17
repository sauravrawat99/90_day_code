// Q5. Number Triangle
// 1
// 12
// 123
// 1234

const NumberTringle = (n) => {
  for (let row = 0; row < n; row++) {
    let pattern = "";

    for (let num = 1; num <= row + 1; num++) {
      pattern += num;
    }

    console.log(pattern);
  }
};
// NumberTringle(4);

// Q6. Same Number Pattern
// 1
// 22
// 333
// 4444

function sameNumber(n) {
  for (let row = 1; row <= n; row++) {
    let pattern = "";

    for (let num = 1; num <= row; num++) {
      pattern += row;
    }
    console.log(pattern);
  }
}

// sameNumber(4);

// Q8. Right Aligned Numbers
//    1
//   12
//  123
// 1234

function rightAlignedNumber(n) {
  for (let row = 0; row < n; row++) {
    let pattern = "";

    for (let space = 1; space < n - row; space++) {
      pattern += " ";
    }
    for (let num = 1; num <= row + 1; num++) {
      pattern += num;
    }
    console.log(pattern);
  }
}
// rightAlignedNumber(4);

// LEVEL 3: PYRAMID THINKING (IMPORTANT)
// Q9. Star Pyramid
//    *
//   ***
//  *****
// *******

const pyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = "";

    // spaces
    for (let s = 0; s < n - i; s++) {
      line += " ";
    }

    // stars
    for (let st = 0; st < 2 * i - 1; st++) {
      line += "*";
    }

    console.log(line);
  }
};

// pyramid(4);

// Q10. Inverted Pyramid
// *******
//  *****
//   ***
//    *

const InvertedPramind = (n) => {
  for (let i = n; i >= 1; i--) {
    let line = "";

    for (let sp = 0; sp < n - i; sp++) {
      line += " ";
    }
    for (let st = 0; st < 2 * i - 1; st++) {
      line += "*";
    }
    console.log(line);
  }
};
InvertedPramind(4);
