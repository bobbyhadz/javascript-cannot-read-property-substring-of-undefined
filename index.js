// Cannot read properties of undefined (reading 'substring')

// EXAMPLE 1 - Initialize the value of the variable to an empty string

const someVar = undefined;

// ✅ Initialize to empty string
const str = someVar || ''; // 👉️ ""

// ✅ Using ternary operator
const result1 = typeof str === 'string' ? str.substring(1) : '';
console.log(result1); // 👉️ ""

// ✅ Using optional chaining (?.)
const result2 = str?.substring(1) || '';
console.log(result2); // 👉️ ""

// ✅ Using if/else statement
if (typeof str === '') {
  const result3 = str.substring(1);
} else {
  console.log('str is not a string');
}

// ✅ Initialize to empty string
const result4 = (str || '').substring(1);
console.log(result4); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 2 - Solve the error when using arrays by making the sure element at the index exists and is a string

// const arr = [];

// const result =
//   typeof arr?.[0] === 'string' ? arr[0].substring(1) : '';
// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 3 - Solve the error when using classes

// class Person {
//   // ✅ Initialize to empty string
//   last = '';

//   // ✅ Initialize from parameters
//   constructor(first) {
//     this.first = first;
//   }

//   substringFirst() {
//     return this.first.substring(1);
//   }

//   substringLast() {
//     return this.last.substring(1);
//   }
// }

// const p1 = new Person('John');
// p1.substringFirst();
// p1.substringLast();
