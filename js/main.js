new Accordion(".accordion");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open");
  });
});


window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelector(".header").classList.remove("open");
  }
});


const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Нажмите на картинку или заголовок для просмотра");
});

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  alert("Нажмите на картинку или заголовок для просмотра");
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  alert("Нажмите на картинку или заголовок для просмотра");
});

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  alert("Нажмите на картинку или заголовок для просмотра");
});
