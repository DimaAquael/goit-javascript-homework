// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве.Код должен работать для любого массива чисел. 
// Используй цикл для решения задачи.

const numbers = [2, 17, 94, 1, 23, 37];
let min =numbers[0];

for (const iterator of numbers) {
  if (min > iterator) {
      min = iterator;
    }
}

console.log(min); // 1