// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onSizeInput = (event) => {
    // console.log(event.currentTarget.value);
  let number = event.currentTarget.value;
    // console.log(number);
    textEl.style.fontSize = `${number}px`;
    console.log(textEl.style.fontSize);
};


// console.log(event.currentTarget.value);
inputEl.addEventListener("input", onSizeInput);