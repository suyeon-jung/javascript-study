"use strict";

import { numbers, students } from "./data";

const result = numbers.map((number) => number + 2);
console.log(result);

console.log(
  "영어 점수",
  students.map((student) => {
    return student.engScore;
  })
);

console.log(
  "이름",
  students.map((student) => {
    return student.name;
  })
);
