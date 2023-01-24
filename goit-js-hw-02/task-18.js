// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
// значения которых будут переданы в параметр dimensions в виде строки.Значения гарантированно разделены пробелом.

function getRectArea(dimensions) {
    const array = dimensions.split(" ");
    Number(array)
    return array[0] * array[1];
}

console.log(getRectArea("8 11"));
