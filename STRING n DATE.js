// string creati0n

let s = "Ahmad";
let m = "Ahmad";
let v = `Ali is
the good
boy`; // more modern because we can write in multiple lines
// console.log(s);
// console.log(m);
// console.log(v);
// let date = 41;
// v = `Eid is Coming ${date}`;
// console.log(v);
// console.log(v.length);

let csvData = "item1,item2,item3";
let items = csvData.split(","); // ["item1", "item2", "item3"]

let words = "The quick brown fox";
let word_array = words.split(" "); // ["The", "quick", "brown", "fox"]

let letters = "abc";
let letter_array = letters.split(""); // ["a", "b", "c"]

let i = 0;
let str = "";
// console.log(word_array[0]);;

// let now = new Date();
// console.log(now.toString());

// String
// const str1 = "Rohitboy";
// const str2 = 'Rohit Negi';
// const day = 18;
// const str3 = `Strike is coming on ${day}`;

// console.log(str3);

// const str = `Hello Coder Army`;

// console.log(str.length)
// console.log(str[1]);

// str[2] = "S";
// console.log(str)

// upper case
// const a = str.toUpperCase();
// const b = str.toLowerCase();
// console.log(b);

// const str = `Hello Coder Army Coder`;

// console.log(str.indexOf('Cod'));
// console.log(str.lastIndexOf('Cod'));
// console.log(str.includes('cod'));

// slice
// console.log(str.slice(2,7));
// console.log(str.slice(3));
// console.log(str.slice(-5,-2));

// const str = `Hello Coder Army Coder`;

// console.log(str.substring(2,5));

// const a = "Rohit";
// const b = "Negi";
// const c = a+" "+b;
// console.log(c);

// console.log(24+"Rohit");
// console.log(24+"Rohit"+10);
// console.log(24+30+"Rohit");

// const str = `Hello Coder Army Coder`;

// console.log(str.replaceAll("ode",'iam'));

// const user = "  Rohit  Negi ";
// console.log(user.trim());

// const names = "Rohit Mohit Suraj Rohan Anjali";

// console.log(names.split(" "))
// console.log(names.split(","))

// const now = new Date();

// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());

// Local time chal rha
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getSeconds());

// days: Mon-tue(1 based)
// Month: 0 1

// year month date hour minute second millisecond
// const now = new Date(2025,8,20,8,25,16,125);

// console.log(now.toString());

// Timestamp
const now1 = Date.now();
const dates = new Date(1759275037293);
// console.log(dates.toString());

// console.log(dates);
// console.log(now);
// 1759272851288: TimeStamp;

//_______________________________________________________________ Date Practise ___________________________________________

let date = new Date();
const date1 = Date.now();

// console.log("Pakistani time UTC + 5 hours: ", date.toString());
// console.log(`UTC Time in ms: , ${date1}`);

// new Date(year, month, day, hours, minutes, seconds, ms)
// const myDate = new Date(2025, 8, 4, 6, 20, 11, 125);
// console.log(myDate.toString()); // Thu Sep 04 2025 06:20:11 GMT+0530 (India Standard Time)

/* 

**🚨 CRITICAL GOTCHA: Months are Zero-Indexed! 🚨**
This is the most common source of bugs with JavaScript dates.

- `0` = January
- `1` = February
- ...
- `8` = **September** (as in the example above)
- `11` = December

*/

// const now = new Date(); // Let's pretend it's Sep 4, 2025, a Thursday

// console.log(now.getFullYear()); // 2025 (The full 4-digit year)
// console.log(now.getMonth());    // 8 (Remember, 0-indexed, so 8 is September)
// console.log(now.getDate());     // 4 (The day of the month, 1-31)
// console.log(now.getDay());      // 4 (The day of the week: 0=Sunday, 1=Monday, ..., 4=Thursday)
// console.log(now.getHours());    // e.g., 6 (The hour, 0-23)
// console.log(now.getMinutes());  // e.g., 20 (The minute, 0-59)

const da = new Date(1759262295036); // Creates a specific date
// console.log("Before:", da);

// Let's change the month to May (index 4)
da.setMonth(4);
da.setFullYear(1998);
da.setMonth(5);

// console.log("After:", da); // The ORIGINAL 'da' object has been changed.

// 2025 is not a leap year, so February has 28 days.
// You are asking for Feb 28 + 2 days.
// const a = new Date(2025, 1, 30);

// // The date object auto-corrects to March 2nd, 2025.
// console.log(a); // Outputs: Sun Mar 02 2025 ...

const now = new Date();

// .toString() is the default, verbose format in the local timezone.
console.log(now.toString());
// e.g., Mon Oct 28 2024 04:15:00 GMT+0530 (India Standard Time)

// .toDateString() gives you just the date part.
console.log(now.toDateString());
// e.g., Mon Oct 28 2024

// .toISOString() gives the universal, unambiguous UTC time. The 'Z' means UTC.
// This is what you send to servers.
console.log(now.toISOString());
// e.g., 2024-10-27T22:45:00.000Z

// .toLocaleString() formats the date and time in a way that is natural
// for the user's region and language. BEST for user display.
console.log(now.toLocaleString());
// e.g., in India: 28/10/2024, 4:15:00 am
// e.g., in the US: 10/27/2024, 4:15:00 PM
/*

1. **Months are 0-indexed.** This is the #1 source of bugs.
2. **Dates are Mutable.** Setter methods change the original object.
3. **String Parsing is Unreliable.** Never use `new Date("some-date-string")`.
4. **Timezones are Complex.** Always be aware of whether you are working with local time or UTC time. Send UTC timestamps to servers.


*/
