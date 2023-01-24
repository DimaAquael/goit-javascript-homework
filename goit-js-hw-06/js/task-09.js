// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColorEl = document.querySelector("body");
const buttonEL = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const onButtonClick = () => { 
  bodyColorEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
};

buttonEL.addEventListener("click", onButtonClick);
