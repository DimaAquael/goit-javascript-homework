// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.
const calculator = {
    a: 0,
    b: 0,

    read(a, b) {
        this.a = a;
        this.b = b;
    },

    add() {
        return this.a + this.b;
    },
    mult() {
        return this.a * this.b;
    },
};
 
calculator.read(5, 5);

console.log(calculator.add());
console.log(calculator.mult());