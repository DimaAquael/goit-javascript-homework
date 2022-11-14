// Модуль 2. Занятие 3. Массивы
// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

const genres = ["Jazz", "Blues"];

genres.push("Рок-н-ролл");

console.log(genres[0]);
console.log(genres[genres.length-1]);

console.log(genres.shift());

genres.unshift("Country", "Reggae");

console.table(genres);