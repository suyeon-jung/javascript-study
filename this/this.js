// let person = {
//   fullname: "정수연",
//   age: 25,
//   printThis: function () {
//     console.log(this);
//     console.log(this === person);
//     console.log(this === window);
//   },
// };

// person.printThis();

// let printThis = person.printThis;
// printThis();

// ES5 bind - this 설정
// function printThis() {
//   console.log(this); // default this => window
// }
// let person2 = {
//   name: "홍길동",
// };
// let person3 = {
//   name: "정길동",
// };
// let printThis1 = printThis.bind(person2);
// let printThis3 = printThis1.bind(person3); // bind는 한번만 등록할 수 있음

// printThis3();

// 1000ms - 1초
// let person = {
//   name: "정수연",
//   age: 20,
//   hello: function () {
//     setTimeout(
//       function () {
//         console.log(this);
//         console.log(this.name);
//         console.log(this.age);
//       }.bind(this),
//       1000
//     );
//   },
// };

// let person = {
//   name: "정수연",
//   age: 20,
//   hello: function () {
//     console.log(this);
//     setTimeout(() => {
//       console.log(this);
//       console.log(this.name);
//       console.log(this.age);
//     }, 1000);
//   },
// };
// person.hello();

// console.log(this);
