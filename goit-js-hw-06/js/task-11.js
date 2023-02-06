// Создание и сбор данных из форм

// 1.Динамическое создание 2 - х форм на основе входящих данных
// 2.Динамическое создание ссылок refs
// 3.Получение данных форм и запись в объект

// Данные из Input
const dataSetInput = {
  form1: {
    firstname: "",
    lastname: "",
    password: "",
  },
  form2: {
    firstname: "",
    lastname: "",
    password: "",
  },
};

// Данные из Submit
const dataSetSubmit = {
  form1: {
    firstname: "",
    lastname: "",
    password: "",
  },
  form2: {
    firstname: "",
    lastname: "",
    password: "",
  },
};

const refs = {
  controls1: "",
  controls2: "",
};

// Функция для динамической привязки из DOM
function getRefs(refs) {
  const keys = Object.keys(refs);
  // console.log(keys);
  for (const key of keys) {
    refs[key] = document.querySelector(`#${key}`);
  }
}

getRefs(refs);

// Динамическое создание ссылок refs
function getRef(id) {
  refs[id] = document.querySelector(`#${id}`);
  // console.dir(refs[id]);
}

// Динамическое создание 2 - х форм на основе входящих данных
function createForm({ newElement, place, myId, text, textContent, placeholderName }) {
  const element = document.createElement(newElement);
  element.id = myId;
  element.type = text;
  element.textContent = textContent;
  element.placeholder = placeholderName;
  if (placeholderName) {
    element.name = placeholderName.toLowerCase();
  }
  place.append(element);
  getRef(element.id);
}

createForm({ newElement: "form", place: refs.controls1, myId: "form1", placeholderName: "form1" });
createForm({ newElement: "input", place: refs.form1, myId: "input1", text: "text", placeholderName: "FirstName" });
createForm({ newElement: "input", place: refs.form1, myId: "input2", text: "text", placeholderName: "LastName" });
createForm({ newElement: "input", place: refs.form1, myId: "input3", text: "text", placeholderName: "Password" });
createForm({ newElement: "button", place: refs.form1, myId: "buttonId", text: "submit", textContent: "Send" });

createForm({ newElement: "form", place: refs.controls2, myId: "form2" });
createForm({ newElement: "input", place: refs.form2, myId: "input1", text: "text", placeholderName: "FirstName" });
createForm({ newElement: "input", place: refs.form2, myId: "input2", text: "text", placeholderName: "LastName" });
createForm({ newElement: "input", place: refs.form2, myId: "input3", text: "text", placeholderName: "Password" });
createForm({ newElement: "button", place: refs.form2, myId: "buttonId", text: "submit", textContent: "Send" });

// console.log(refs);
// console.dir(refs);

// Получение данных форм и запись в объект
function onInput(event) {
  const formName = event.srcElement.form.id;
  const name = event.target.name;
  const value = event.target.value;

  dataSetInput[formName][name] = value;
  // console.log(dataSetInput);
}

function onSubmit(event) {
  event.preventDefault();
  const formName = event.submitter.form.id;
  const firstName = event.target[0].value;
  const lastName = event.target[1].value;
  const password = event.target[2].value;

  dataSetSubmit[formName].firstname = firstName;
  dataSetSubmit[formName].lastname = lastName;
  dataSetSubmit[formName].password = password;
  console.log(dataSetSubmit);
}

refs[form1] = addEventListener("input", onInput);
refs[form1] = addEventListener("submit", onSubmit);

refs[form2] = addEventListener("input", onInput);
refs[form2] = addEventListener("submit", onSubmit);
