// Example 9 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

const calсulateAverage = (...args) => {
  let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
    args.forEach(element => total += element );
    
  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2