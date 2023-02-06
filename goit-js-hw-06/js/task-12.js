import courses from "../data/data-task-12/index-task-12.js";

// console.log(courses);

const filtersContainer = document.querySelector(".filters-container");
const coursesContainer = document.querySelector(".courses-container");
const ACTIVE_CLASS = "is-active";

// Функция создает кнопки
function createButton(courses) {
  const arrTags = courses.flatMap((course) => course.tags).filter((course, index, array) => array.indexOf(course) === index);
  // console.log(arrTags);
  const textButton = arrTags.reduce((acc, tag) => {
    return (acc += `<button class="button" type="button" data-tag=${tag}>${tag}</button>`);
  }, "");
  // console.log(textButton);
  filtersContainer.innerHTML = textButton;
}

createButton(courses);

// Функция создает список
function createOl(courses) {
  const textOl = courses.reduce((acc, course) => {
    return (acc += `<li>${course.name} - <span class="accent">${course.prices} $</span></li>`);
  }, "");
  coursesContainer.innerHTML = textOl;
}

createOl(courses);

// Динамика при нажатии на кнопки
function onButtonClick(event) {
  // узнаем на что кликнули
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const myClick = event.target.dataset.tag; //значение дата атрибута
  // console.dir(myClick);
  const filter = event.target; //наш фильтр на какой кликаем
  const activeFilter = document.querySelector(`.${ACTIVE_CLASS}`); //ищем активный класс

  // Делаем массив объектов на что кликнули
  const newTextOl = courses.filter((element) => {
    return element.tags.includes(myClick);
  });
  // console.log(newTextOl);
createOl(newTextOl);
    
  if (myClick) {
    filter.classList.add(ACTIVE_CLASS);
  }

    if (activeFilter) {
        activeFilter.classList.remove(ACTIVE_CLASS);
    }

    if (filter === activeFilter) {
      return  createOl(courses);
    }

  // Вешаем класс на кнопку
  // event.target.classList.toggle("is-active");

  // if (event.target.classList.contains("is-active")) {
  //     createOl(newTextOl);
  // } else {
  //     createOl(courses);
  // }
}

filtersContainer.addEventListener("click", onButtonClick);


// Dark Mode
const options = {
  bottom: '64px', // default: '32px'
  right: '64px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff', // default: '#fff'
  buttonColorDark: '#100f2c', // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🔆', // default: ''
  autoMatchOsTheme: true, // default: true
};

function addDarkmodeWidget() {
  new Darkmode(options).showWidget();
}

// Listeners
window.addEventListener('load', addDarkmodeWidget);