// Example 3 - Массив объектов
// Напишите ф - цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
//     Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// Код
const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Бриллиант', price: 2700, quantity: 3 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 200, quantity: 2 },
];

let totalSum = 0;

function calcTotalPrice(stones, stoneName) {
//     // разбить массив на объекты
// for (const stone of stones) {
//   // сделать массив значений
//   const stoneValues = Object.values(stone);
//   // сравнить значение
//   if (stoneName === stoneValues[0]) {
//     totalSum = stoneValues[1] * stoneValues[2];
//   }
// }
//     return console.log(totalSum);
    
    for (const stone of stones) {
        if (stoneName === stone.name) {
            totalSum = stone.price * stone.quantity;
        }
    }

    return console.log(totalSum);
}

calcTotalPrice(stones, "Изумруд");
calcTotalPrice(stones, "Сапфир");