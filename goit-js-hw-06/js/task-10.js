// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const inputEl = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const divEl = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onButtonCreateClick = () => createBoxes(Number(inputEl.value));
buttonCreate.addEventListener("click", onButtonCreateClick);

const onButtonDestroyClick = () => destroyBoxes();
buttonDestroy.addEventListener("click", onButtonDestroyClick);

const createBoxes = (amount) => {
  let divElement = "";
  let size = 30;
  const step = 10;
  for (let index = 0; index < amount; index++) {
    size += step;

  let i = `<div style="width: ${size}px; height: ${size}px;background-color: ${getRandomHexColor()};"></div></br>`;
  divElement += i; 
  // console.log(i);
  };
  divEl.innerHTML = divElement;
  console.log(divElement);
};

const destroyBoxes = () =>  divEl.innerHTML = "";