// Q14. 0–1 Pattern
// 1
// 01
// 101
// 0101

const Pattern_01 = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let nu = 0; nu < i; nu++) {
      if ((i + nu) % 2 == !0) {
        line += "1";
      } else {
        line += "0";
      }
    }
    console.log(line);
  }
};
// Pattern_01(4);

/*Q15. Alternating Stars
 *
 **
 *
 **
 *
 */

const Alternating_Stars = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let star = 0; star < 1; star++) {
      if (i % 2 === 0) {
        line += "**";
      } else {
        line += "*";
      }
    }
    console.log(line);
  }
};

Alternating_Stars(5);

const pascalTriangle = (n) => {
  let triangle = [];

  for (let i = 0; i < n; i++) {
    let row = [];

    for (let j = 0; j <= i; j++) {
      // first & last element always 1
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        // sum of upper-left and upper-right
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }

    triangle.push(row);
    console.log(row.join(" "));
  }
};

pascalTriangle(4);
