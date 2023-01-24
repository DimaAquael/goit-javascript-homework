// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) 
// и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
  // твой код

  const array = string.split(" ");
  let maxWord = "";

  for (let i = 0; i < array.length; i++) {
    if (array[0].length > array[i].length) {
      maxWord = array[0];
    } else {
      array[0] = array[i];
    }
    
  }

  return maxWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'