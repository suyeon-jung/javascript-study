"use strict";

import { numbers, students, fruits } from "./data.js";

console.log(
  "짝수만 출력",
  numbers.filter((number) => number % 2 === 0)
);
console.log(
  "홀수만 출력",
  numbers.filter((number) => number % 2 === 1)
);

console.log(
  "영어 점수가 90점 이상인 학생",
  students.filter((student) => student.engScore >= 90)
);
