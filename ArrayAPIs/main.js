"use strict";

import { numbers, students, fruits } from "./data.js";

// const result = numbers.reduce((acc, cur, idx, src) => {
//   console.log(acc, cur, idx, src);
//   return acc + cur;
// }, 0);

// console.log(result);

console.log(fruits);
const result = fruits.reduce((acc, cur) => {
  if (acc.includes(cur) === false) acc.push(cur);
  return acc;
}, []);

console.log(result);
