// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое
const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function addCourse(cours) {
  if (courses.includes(cours)) {
    console.log("У вас уже есть такой курс");
  } else {
    return courses.push(cours);
  }
}

function removeCourse(cours) {
  if (!courses.includes(cours)) {
    console.log("Курс с таким именем не найден");
  } else {
    return courses.splice(courses.indexOf(cours), 1);
  }
}

function updateCourse(cours, newCours) {
  return courses.splice(courses.indexOf(cours), 1, newCours);
}

addCourse("Express");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse("CSS"); // 'У вас уже есть такой курс'

removeCourse("React");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse("Vue"); // 'Курс с таким имененем не найден'

updateCourse("Express", "NestJS");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
