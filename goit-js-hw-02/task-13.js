// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

const string = 'Welcome to the future';

const arrayString = string.split("");
const arrayBackString = [];

for (let i = 0; i < arrayString.length; i++) {
    arrayBackString.unshift(arrayString[i]); 
}

console.log(arrayBackString.join(" "));