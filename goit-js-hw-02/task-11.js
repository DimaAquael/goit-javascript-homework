// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. 
// В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.Количество имен и телефонов гарантированно одинаковое.

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const arrayName = names.split(",");
const arrayPhones = phones.split(",");

for (let i = 0; i < arrayName.length; i++) {
      console.log(`${arrayName[i]}: ${arrayPhones[i]}`);
}