function isEven(n) {
  if (Math.floor(n / 2) * 2 === n) console.log("This is Even Number");
  else console.log("This is Odd Number");
}
// isEven(4);
// isEven(41);

// ------------------- Question 2

function GreetingUser(name = "Guest") {
  console.log("Hello", name);
}

// GreetingUser();
// GreetingUser("Ahmad Malik");

// ---------------------- Question No 3

const cube = (num) => num * num * num;
//console.log(cube(3));

// ---------------------- Question No 4

function maxValue(...num) {
  maxNum = Number.MIN_VALUE;
  for (const n of num) {
    maxNum = Math.max(n, maxNum);
  }
  console.log(maxNum);
}

// maxValue(3,4,333,4,6,8,6666,78,2);

// ---------------------- Question No 5

function sumAfterFirst(first, ...remaining) {
  let sum = 0;
  for (const iter of remaining) {
    sum += iter;
  }
  console.log(sum);
}

// sumAfterFirst(3,4,4,4,2);
// sumAfterFirst(3,4,4,4,2);

// ---------------------- Question No 6

let arr = [5, 4, 3, 5];
let arr2 = [...arr];
// console.log(arr2);

// ---------------------- Question No 7

const val = () => ({ name: "Ahmad", age: 25 });
// console.log(val());

// ---------------------- Question No 8

const user1 = { Name: "Ahmad", title: "Book for User 1" };
const user2 = { skill: "JS", level: "Beginner" };
const user3 = { ...user1, ...user2 };
// console.log(user1);
// console.log(user2);
// console.log(user3); // merged

// ---------------------- Question No 9

function processData(num, callBack) {
  console.log("Processing...");
  callBack(num);
}

function square(n) {
  console.log(n * n);
}

// processData(5, square);

// ---------------------- Question No 10

function addTen(num) {
  return num + 10;
}

function double(num) {
  return 2 * num;
}

function Calculate(n, Operations) {
  console.log("The Result is: ", Operations(n));
}
// Calculate(2, addTen);
// Calculate(2, double);

// ---------------------- Question No 11

// const counter = (() => {
//   console.log("App Started");
//   let count = 0;
//   return () => ++count;
// })();

// ---------------------- Question No 12

function TenPercent(n) {
  let ans = (n * 10) / 100;
  ans = n - ans;
  return ans;
}

function TwentyPercent(n) {
  let ans = (n * 20) / 100;
  ans = n - ans;
  return ans;
}

function Calculate(n, callBack) {
  console.log("The discounted Price is: ", callBack(n));
}
// Calculate(1000, TenPercent);
// Calculate(1000, TwentyPercent);

// ---------------------- Question No 13

function Operations(n) {
  return (a, b) => {
    if (n == "add") return a + b;
    else if (n == "sub") return a - b;
    else if (n == "mul") return a * b;
    else if (b !== 0 && n == "div") return a / b;
    else return -1;
  };
}

const OP = Operations("di1v");
// console.log(OP(3, 6));

// ------------------------------------- Pro Level

// ---------------------- Question No 1

function Greets() {
  return 9;
}

// console.log(typeof Greets);
// console.log(Greets());

// ---------------------- Question No 2

function SUM(a, b) {
  console.log(a); // 5
  console.log(b); // undefined (in both cases)
  return a + b;
}

// SUM(5); // b = undefined (automatically)
// SUM(5, undefined); // b = undefined (explicitly)

// ---------------------- Question No 3

// console.log(add(2, 3));
const add = function (a, b) {
  return a + b;
};

// this is because add function must declair first before use it we store function in variable

// ---------------------- Question No 4

function average(...num) {
  let size = num.length;
  let sum = 0;
  for (const iter of num) {
    sum += iter;
  }
  return sum / size;
}

// console.log(average(5,5,15));

// ---------------------- Question No 5

function logNames(firstName, remains) {
  console.log(`First Extracted Name: ${firstName}`);
  console.log(`remaining Extracted Name: ${remains}`);
}
const logArr = ["Ahmad", "Hassan", "Ali"];
const [name, ...namess] = logArr;
// logNames(name, namess);

// ---------------------- Question No 6

const arr01 = [1, 2, 3];
const arr02 = [...arr01];
arr02.push(0, 4);
arr02.sort((a, b) => a - b);
// console.log(arr01);
// console.log(arr02);

// ---------------------- Question No 7

const createBook = () => ({ title: "Books", price: 900 });

// console.log(createBook());

// ---------------------- Question No 8

const result = (function (x) {
  return x * 2;
})(5);

// console.log(result); // 10

// ---------------------- Question No 9
// Fixed Code
function process(num, callback) {
  console.log("Processing");
  callback(num);
}

function square(n) {
  console.log(n * n);
}

// process(4, square);

// ---------------------- Question No 10

const calculatePro = (a, b, op) => {
  if (op == "add") return a + b;
  else if (op == "sub") return a - b;
  else if (op == "mul") return a * b;
  else if (op == "div" && b === 0) return 1e9 + 7;
  else if (op == "div" && b !== 0) return a / b;
  else return -1;
};
// console.log(calculatePro(5,6,"add"));

// ---------------------- Question No 11

// (function IIFE() {
//   console.log("Initialized");
//   let count = 0;
//   () => ++count;
// })();
// ---------------------- Question No 12

const user11 = { name: "Ali", age: 20 };
const user12 = { ...user11 };
user12.age = 25;
// console.log(user11); //{ name: 'Ali', age: 20 }
// console.log(user12); // { name: 'Ali', age: 25 }

// ---------------------- Question No 13

function operationFactory(n) {
  return (a, b) => {
    if (n == "add") return a + b;
    else if (n == "mul") return a * b;
    else return -1;
  };
}

const add1 = operationFactory("mul");

console.log(add1(4, 5));
