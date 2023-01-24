// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const counterValueEl = document.querySelector("#value");
const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');
console.log(minusBtn);
console.log(plusBtn);

const minusClick = () => {
    console.log("Уменьшили на -1");
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
    console.log(counterValue);
};
const plusClick = () => {
    console.log("Увеличили на +1");
    counterValue += 1;
    counterValueEl.textContent = counterValue;
    console.log(counterValue);
};

minusBtn.addEventListener("click", minusClick);
plusBtn.addEventListener("click", plusClick);
// console.log(onMinusBtnClick);
// console.log(onPlusBtnClick);



// let counterValue = 0;
// const counterValueEl = document.querySelector("#value");
// const divEl = document.querySelector("#counter");
// const minusBtn = divEl.firstElementChild;
// const plusBtn = divEl.lastElementChild;
// // console.log(minusBtn);
// // console.log(plusBtn);
// let step = 5;

// const minusCl = () => counterValue -= step;
// const plusCl = () => counterValue += 1;

// const minusClick = () => minusCl();
// const plusClick = () => plusCl();

// minusBtn.addEventListener("click", minusClick);
// plusBtn.addEventListener("click", plusClick);


// // counterValueEl.textContent = counterValue;
// console.log(counterValue);
// console.log(typeof(counterValue));