// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. 
// Результирующая строка не должна начинаться или заканчиваться пробельным символом.
// Скрипт должен работать для любой строки.

const string = 'Welcome to the future';

const arrayString = string.split(" ");
arrayString.shift();
arrayString.pop();

console.log(arrayString.join(" "));