// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного
//     (который выполнил больше всех задач).Сотрудники и кол - во выполненых задач содержатся как свойства объекта 
//     в формате "имя": "кол-во задач".

const findBestEmployee = function(employees) {
//   твой код
    const names = Object.keys(employees);
    const employ = Object.values(employees);
    const deals = Math.max(...employ);
    let findName = "";

    // console.log(employ);
    // console.log(deals);

        for (let i = 0; i < employ.length; i+=1) {
            
            if (employ[i] === deals) {
                findName = names[i];
                break;
            // console.log(names[i]);
        }
    }
    return findName

  
  
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux