import "./index.css";

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
  const a = parseInt(box.textContent, 10);
  box.textContent = a + 1;
});
