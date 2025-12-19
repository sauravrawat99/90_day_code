// Q11. Diamond Pattern
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
// @UdemyPie
const dimondpattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let space = 0; space < n - i; space++) {
      line += " ";
    }
    for (let st = 0; st < 2 * i - 1; st++) {
      line += "*";
    }
    console.log(line);
  }
  for (let i = n; i > 1; i--) {
    let line = "";
    for (let space = 0; space <= n - i; space++) {
      line += " ";
    }
    for (let st = 1; st < 2 * i - 2; st++) {
      line += "*";
    }
    console.log(line);
  }
};
// dimondpattern(4);

// Q12. Hollow Square
// ****
// *  *
// *  *
// ****

const hollowSquare = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = "";

    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        line += "*";
      } else {
        line += " ";
      }
    }

    console.log(line);
  }
};

// hollowSquare(4);

/*Q13. Hollow Triangle
 *
 **
 * *
 ****   */

const hollowTRingle = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = "";

    for (let st = 1; st <= i; st++) {
      if (i === 1 || i === n || st === 1 || st === i) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
};

hollowTRingle(4);
