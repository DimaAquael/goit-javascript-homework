// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
// и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const listWithId = document.querySelector("#categories");
// console.log(listWithId);
const listItems = listWithId.children;
// console.log(listItems);
console.log(`Количество категорий:`,listItems.length);
// console.log(`Количество категорий:`,listItems[0]);

const firstCategory = listItems[0].firstElementChild;
console.log(`Категория:`,firstCategory.textContent);

const firstGropElement = firstCategory.nextElementSibling.children.length; 
console.log(`Элементы:`,firstGropElement);

const secondCategory = listItems[1].firstElementChild;
console.log(`Категория:`, secondCategory.textContent);

const secondGropElement = secondCategory.nextElementSibling.children.length;
console.log(`Элементы:`, secondGropElement);

const thirdCategory = listItems[2].firstElementChild;
console.log(`Категория:`, thirdCategory.textContent);

const thirdGropElement = thirdCategory.nextElementSibling.children.length;
console.log(`Элементы:`, thirdGropElement);
