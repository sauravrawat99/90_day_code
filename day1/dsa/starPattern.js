// print the pattern

function pyramid(n) {
  for (let line = 0; line <= n; line++) {
    let pattern = "";
    for (let star = 0; star <= line; star++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
// pyramid(4);

// print invertid star

const inverted = (n) => {
  for (let line = n; line >= 1; line--) {
    let pattern = "";

    for (let star = 1; star <= line; star++) {
      pattern += "*";
    }

    console.log(pattern);
  }
};

// inverted(4);

// right side aline invertid pyramid
// ****
//  ***
//   **
//    *

const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = "";

    for (let s = 0; s < i - 1; s++) {
      line += " ";
    }

    for (let st = 0; st < n - i + 1; st++) {
      line += "*";
    }

    console.log(line);
  }
};
// pattern(10);

// Inverted Left Triangle
// ****
// ***
// **
// *

const leftTrigle = (n) => {
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let st = 1; st <= n - row + 1; st++) {
      line += "*";
    }
    for (let space = 1; space < row - 1; space++) {
      line += " ";
    }
    console.log(line);
  }
};
// leftTrigle(4);

// Right Aligned Triangle
//    *
//   **
//  ***
// ****

const RightAlignedTriangle = (n) => {
  for (let row = 1; row <= n; row++) {
    let pattern = "";
    for (let space = 1; space < n - row + 1; space++) {
      pattern += " ";
    }
    for (let st = 1; st < row + 1; st++) {
      pattern += "*";
    }
    console.log(pattern);
  }
};
// RightAlignedTriangle(4);

// Q4. Right Aligned Inverted
// ****
//  ***
//   **
//    *

const RightAlignedInverted = (n) => {
  for (let row = 0; row < n; row++) {
    let pattern = "";
    for (let space = 1; space < row + 1; space++) {
      pattern += " ";
    }
    for (let st = 1; st < n - row + 1; st++) {
      pattern +="*";
    }
    console.log(pattern);
  }
};
RightAlignedInverted(4);
