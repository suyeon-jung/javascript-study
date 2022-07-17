"use strict";

import { numbers, students, fruits } from "./data.js";

console.log(
  "과일 중에 배가 있나요?",
  fruits.some((fruit, idx) => {
    console.log(idx, fruit);
    return fruit === "배";
  })
);

console.log(
  "숫자에 7이상인 숫자가 있나요?",
  numbers.some((number) => number >= 7)
);

console.log(
  "수학 점수가 100점인 학생이 있나요?",
  students.some((student) => student.matScore === 100)
);
