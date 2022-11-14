// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(minutes) {
    let totalMinutes = minutes;
    const hours = Math.floor(totalMinutes / 60);
    const minut = totalMinutes % 60;
    console.log(hours);
    console.log(minut);

    const doubleDigitHours = String(hours).padStart(2, 0);
    const doubleDigitMinutes = String(minut).padStart(2, 0);
    console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"