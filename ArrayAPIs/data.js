export const numbers = [1, 2, 3, 4, 5, 6, 7];

export class Student {
  constructor(name, engScore, matScore) {
    this.name = name;
    this.engScore = engScore;
    this.matScore = matScore;
  }
}

const student1 = new Student("홍길동", 95, 21);
const student2 = new Student("정길동", 95, 21);
const student3 = new Student("박길동", 95, 21);

export const students = [student1, student2, student3];

export const fruits = ["사과", "딸기", "배", "참외", "딸기", "수박"];
