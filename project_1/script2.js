// const usdCurr = 28;
// const discount = 0.9;

// function convert(amout, curs) {
//   return amout * curs;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// promotion(convert(500, usdCurr));

function sayHello(name) {
  return `"Привет, ${name}"`;
}
console.log(sayHello("penis"));

let a = function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
};

function getMathResult(x, y) {
  let str = "";
  const firstArg = x;
  if (typeof y !== "number" || y <= 0) {
    return x;
  } else {
    for (let i = 1; i <= y; i++) {
      x = firstArg * i;
      if (i === y) {
        str += x;
      } else {
        str += `${x}---`;
      }
    }
    return str;
  }
}
console.log(getMathResult(3, "1"));

let fruit = "Some fruit";
console.log(fruit.indexOf("z"));
console.log(fruit);

const logg = "Hello world";
console.log(logg.slice(1, 5));
console.log(logg);

let num = 12.2;
console.log(Math.round(num));
console.log(num);

let x = "12.2px";
console.log(parseInt(x));
console.log(x);
