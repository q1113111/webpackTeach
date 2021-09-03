import "./index.css";

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
  const a = parseInt(box.textContent, 10);
  box.textContent = a + 1;
});

class Test {
  #a = 0
}
const newTest = new Test()
console.log('newTestssaa',newTest.a)