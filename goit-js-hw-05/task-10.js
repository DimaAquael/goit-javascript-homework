// Example 2 - Хранилище
// Напиши класс Storage который создаёт объекты для управления складом товаров.При вызове будет получать один аргумент -
//     начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих.

class Storage {
    constructor(newItems) {
        this.items = newItems;
    }
    getItems() {
        return this.items;
}
    addItem(item) {
        this.items.push(item);
}
    removeItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
}
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]