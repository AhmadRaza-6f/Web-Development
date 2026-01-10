// ------------- Function in JS ------------
// ------------------------------------------- Part No 1
function Greets() {
  console.log("This is Function.js");
}

// ---------------  arguments and parameters

function SUM(a, b) {
  return a + b;
}

// --------------------- Rest Operator
// used to make augument more flexible
function SUM1(...num) {
  // store all argument in array
  let sum = 0;
  for (const element of num) {
    sum += element;
  }
  console.log(sum);
}
//  ----------------- 2ND WAY to Make Functions
// console.log(add(4,3)); // error
const add = function (a, b) {
  return a * b;
};
// alwar declare function first before call
// but not in 1st method

// ------------------ 3rd way arrow function

const greet = () => {
  console.log("hello g");
};
// used in sort
const arrow1 = (num1, num2) => num1 + num2;

// for 1 parameter

const arrowSquare = (num) => num * num;
// return object using Arrow Functions
// Option no 1
const ArrowObj = () => {
  const user = {
    name: "Ahmad",
    class: "10",
  };
  return user;
};

// option no 2

const ArrowObj1 = () => {
  return {
    name: "Malik",
    age: 22,
  };
};
// option no 3
const ArrowObj2 = () => ({ name: "Malik", title: "Onject with return" });

// ---------------------  IIFE FUNCTION (Imediate Invoke Fuction)
// () used to call function imediately
// (function greet(){
//     console.log("IIFE");
// })();
// // Output: "IIFE"

// (()=>{
//     console.log("Arrow in IIFE");
// })();
// Output: "Arrow in IIFE"

// -----------------------  Call Back FUnction in JS Heart of JS and React
/*
pass function as a argument of another functions
pass other function as referance
jis function mein passs krna hai us mein callback or other word likhna peray ga
*/

function CallBack1() {
  console.log("Helllo Jee");
}

function meet(callback) {
  console.log("I am going to USE it. ");
  callback(); // here callback will perform task
}

function Dance(){
    console.log("Lets Dance!😜");
}

// meet(CallBack1);
// meet(Dance); // increase the reusability of function
// --------------------- Function Calls
// Greets();
// console.log(Greets); // [Function: Greets] store the referance
// console.log(Greets()); // This is Function.js, undefined because it does not return value and we use console.log
// console.log(SUM(4)); //NaN
// console.log(SUM(3,4)); // 7
//  console.log(SUM(3,4,99)); //7
// SUM1(3,4,5,66);
// SUM1(3,4,5,66,2,7,8,9);
// SUM1(3,9);
// console.log(add(4,4));
// greet();
// console.log(arrow1(3,7));
// console.log(arrowSquare(6));
// console.log(ArrowObj());
// console.log(ArrowObj1());
// console.log(ArrowObj2());
// ------------------------------  IMP INFO -------------------
/*
1️⃣ REST Operator (...)
REST = "Baqi sab ko ek jagah jama karo"
A) Function Parameters Mein

function greet(greeting, ...names) {
  return `${greeting} ${names.join(", ")}!`;
}

greet("Hello", "Ahmad", "Ali", "Hassan");
// "Hello Ahmad, Ali, Hassan!"

B) Array Destructuring Mein
const numbers = [1, 2, 3, 4, 5];

// Pehla aur baqi sab
const [first, ...rest] = numbers;

console.log(first);  // 1
console.log(rest);   // [2, 3, 4, 5]

C) Object Destructuring Mein

const user = {
  name: "Malik",
  age: 67,
  city: "Dubai",
  country: "UAE"
};

// Name alag, baqi sab alag
const { name, ...otherInfo } = user;

console.log(name);       // "Malik"
console.log(otherInfo);  // {age: 67, city: "Dubai", country: "UAE"}


2️⃣ SPREAD Operator (...)

SPREAD = "Items ko phailao/expand karo"
A) Arrays Mein

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Arrays ko merge karo
const combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]

// Array copy karo
const copy = [...arr1];
console.log(copy);  // [1, 2, 3]

B) Objects Mein
const user = { name: "Malik", age: 67 };
const address = { city: "Dubai", country: "UAE" };

// Objects merge karo
const userWithAddress = { ...user, ...address };
// {name: "Malik", age: 67, city: "Dubai", country: "UAE"}

// Object copy karo
const userCopy = { ...user };
*/
