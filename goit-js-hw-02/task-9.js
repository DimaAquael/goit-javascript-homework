// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. 
// Значения гарантированно разделены пробелом.

const values = '8 11';

const arraySquare = values.split(" ");

const square = arraySquare[0] * arraySquare[1];

console.log(square);