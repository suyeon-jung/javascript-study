let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  alert("Hello Wolrd");
});

// # 1
window.onload = function () {
  let btn = document.querySelector("#btn");
  btn.addEventListener("click", function () {
    alert("Hello Wolrd");
  });
};
// # 2
document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector("#btn");
  btn.addEventListener("click", function () {
    alert("Hello Wolrd");
  });
});
