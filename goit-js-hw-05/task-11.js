// Example 3 - User
// Напиши класс User который создаёт объект со свойствами login и email.Объяви приватные свойства #login и #email,
//     доступ к которым сделай через геттер и сеттер login и email.

class User {
    #login
    #email
    constructor({login, email}) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(newLogin) {
        return this.#login = newLogin;
    }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie