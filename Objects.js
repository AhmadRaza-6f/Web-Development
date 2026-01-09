// --------------- Objects in JS -----------
const _ = require("lodash"); // for deep copy
// key value
let user = {
  name: "Ahmad",
  age: 22,
  emailID: "me@gmail.com",
  amount: 3400,
  "home id": 34,
};

// freeze the object (no change will be allowed)
// let user = Object.freeze({
//   name: "Ahmad",
//   age: 22,
//   emailID: "me@gmail.com",
//   amount: 3400,
//   "home id": 34,
// });

// console.log(user);
// console.log(typeof user);

// Access particular value
let valu = user.emailID;
// console.log(valu);

// CRUD => CREATE, READ, Update, Delete/
// create
user.rollNo = "2023-CS-28";
// console.log(user.rollNo); // undefined it freeze the object is used

// read
// console.log(user.name);

// update
user.emailID = "This is Email";
// console.log(user.emailID);

// delete
delete user.emailID;
// console.log(user);

// how key are st0red

/*

basically keys are stored in string format

const user = {
    "name": "Ahmad",
    "id"  :  91,
    // why we store it
    because when we need to make a key like
    that has spaces in so we can use string format 
    "home id": 65
};
    // access it like this
    console.log(user["home id"]);

*/

/*
use of let and const for objects

// Dono kaam karte hain:
let user1 = { name: 'Ali', age: 25 };
const user2 = { name: 'Sara', age: 23 };

// Dono mein properties change kar sakte ho:
user1.name = 'Ahmed';  // ✅ Works
user2.name = 'Fatima'; // ✅ Works bhi!

// Lekin reference change karna:
user1 = { name: 'New Object' };  // ✅ let allows this
user2 = { name: 'New Object' };  // ❌ ERROR! const doesn't allow
*/

/*
Agar Object Ko Sach Mein Freeze Karna Ho:
javascriptconst person = Object.freeze({ name: 'Ali', age: 25 });

person.name = 'Ahmed';  // ❌ Kaam nahi karega (strict mode mein error)
person.city = 'Lahore'; // ❌ Add nahi hoga
*/

// objects are alway assign by referance;
const user1 = user;
user1.age = 349999;
// console.log(user["age"]);
// console.log(user1["age"]); // both will be same

// Access the keys of Objects

// console.log(Object.keys(user));

// Access the Value of Objects

// console.log(Object.values(user));

// Access the keys + values (both) of Objects

// console.log(Object.entries(user));

// Loop on objects

// for in loops
// for(let num in user){
//     console.log(num, user[num]); // user.key , user["name"] <= format
// }

/*
--------------------  imp note for loops ----------------------

const user = { name: 'Ali', age: 25 };

// ❌ WRONG
for(let num of user) // Error: not iterable

// ✅ CORRECT - for...in
for(let key in user){
    console.log(key, user[key]);
}

// ✅ CORRECT - for...of with Object.entries()
for(let [key, value] of Object.entries(user)){
    console.log(key, value);
}

solutions 1 to use for of Loops:

const user = { name: 'Ali', age: 25, city: 'Lahore' };

for(let key of Object.keys(user)){
    console.log(key, user[key]);
}
// Output:
// name Ali
// age 25
// city Lahore

options 2:

for(let value of Object.values(user)){
    console.log(value);
}
// Output: Ali, 25, Lahore

option 3:

for(let [key, value] of Object.entries(user)){
    console.log(key, value);
}
// Output:
// name Ali
// age 25
// city Lahore
*/

/*
Modern Alternatives (Better Options):
✅ Objects Ke Liye:

const user = { name: 'Ali', age: 25, city: 'Lahore' };

// Option 1: Object.keys()
Object.keys(user).forEach(key => {
    console.log(key, user[key]);
});

// Option 2: Object.entries() - BEST!
Object.entries(user).forEach(([key, value]) => {
    console.log(key, value);
});

// Option 3: for...of with Object.entries()
for(let [key, value] of Object.entries(user)){
    console.log(key, value);
}

// Option 4: Object.values() (sirf values chahiye)
Object.values(user).forEach(value => {
    console.log(value);
});

*/
// -------------------------------------------  Object 2 = USER  -------------------------------------------

const USER = {
  name: "Ahmad Malik",
  age: 22,
  emailID: "me@linked.com",
  amount: 55000,
};
// old method
// const n = USER.name;
// const a = USER.age;
// console.log(n,a);

// best way obj destructuring same name hona caheay

// const { name, age } = USER;
// console.log(name, age);

// second option for rename variables:

// const { name: n, age: a } = USER;
// console.log(n, a);
// // Output: Ahmad Malik 22

// // Ab 'name' kaam nahi karega, sirf 'n' kaam karega
// console.log(name); // ❌ ReferenceError: name is not defined
// console.log(n); // ✅ Ahmad Malik

// array destructuring

// const arr = [3, 2, 4, 5];
// const [f, s] = arr; // name my be any thing like i used  f for first and s for second
// console.log(f, s);

// -------------------------------------------  Object 3 = info  -------------------------------------------

// function as value in objects
const info = {
  name: "Ahmad Malik",
  age: 22,
  salary: "$1.5M",
  //  risky method
  // greeting: function(){
  //     console.log(`Hi, My name is ${info.name} and my age is ${info.age} Years`);
  //     return 20;
  // }
  // best way to use it is this keywords
  greeting: function () {
    console.log(`Hi, My name is ${this.name} and my age is ${this.age} Years`);
    return 20;
  },
  /*
        -- this keywords --
            this refer to store the referance of object which call it(this is pointing to info in our case),
        why we use it?

        */
  address: {
    city: "Multan",
    province: "Punjab",
  },
  // nested Objects-------------<---------
};

// const val = info.greeting(); // accept return value
// console.log(val);
// const info2 = {
//   name: "Ahmad Raza",
//   age: 22,
//   salary: "$1.5M",
// };

// info2.greeting = info.greeting;
// info2.greeting();

// ---------- Shallow Copy --------

// const info2 = { ...info };
// info2.age  = 32;
// console.log(info2.age);
// info2.address.city = "Lahore";
// console.log(info);
// console.log(info2);

// ^<= above we see that shallow copy does not handle the nested objs

// --------------------    DEEP COPY   ------------

// const info2 = structuredClone(info); // problem functions ko copy nahi krta
// info2.address.city = "Lahore";
// console.log(info);

// manual fix:

/*const info = {
  name: "Ahmad Malik",
  age: 22,
  greeting: function () {
    console.log(`Hi, My name is ${this.name}`);
  },
  address: {
    city: "Multan",
    province: "Punjab",
  }
};

// Manual deep clone function:
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj);
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }
  
  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

const info2 = deepClone(info);  // ✅ Works with functions!
info2.address.city = "Lahore";
console.log(info.address.city);   // "Multan"
console.log(info2.address.city);  // "Lahore" */

// using libary lodash------------------------------
// professional way
// const info2 = _.cloneDeep(info);
// info2.address.city = "Islamabad";
// info2.name = "John Cena";

// console.log(info);
// console.log(info2);

// ------------------------  ------------ ------- Obj 4 Page  ------------ ------------------- -------
/*
    * Important Info:
        1. No. is also used as a name in objects
        2. Because it will used here as a string
        3. In the same way Array was Built in JS
        4. Objects can use string and symbols as a key
*/

const sym = Symbol("IS");
const Page = {
  name: "Ahmad Taj",
  0: "This is data at index 0",
  1: "This is data at index 1",
  [sym]: "Its key is Symbol because of [] Brackets",
};

console.log(Page[sym]);

