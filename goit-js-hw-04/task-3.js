// Модуль 4. Занятие 7. Коллбеки. Стрелочные функции. forEach
// Example 1 - Коллбек функции
// Напишите следующие функции:

// createProduct(obj, callback) - принимает объект товара без id, а также колбек. Функция создаёт обьект товара,
// добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль
// Решение

const createProduct = (obj, callback) => {
  const newObject = {
      id: Date.now(),
    ...obj,
  };

  callback(newObject);
};

const logProduct = product => console.log(product);
const logTotalPrice = product => console.log(product.price * product.quantity);

createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);
