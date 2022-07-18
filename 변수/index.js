var msg;
msg = "Hello World";
console.log(msg);

// prompt는 숫자를 입력해도 문자열을 반환(변환을 위해서는 parseInt, parseFloat 메서드 활용)
var name = prompt("이름을 입력해 주세요.");
console.log(name, "님 환영합니다.", typeof name);

var height = parseInt(prompt("키를 입력해주세요."));
console.log(height, typeof height);
