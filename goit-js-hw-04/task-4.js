// Example 2 - Коллбек функции
// Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError),
// где первый параметр это сумма операции, а второй и третий - колбеки.

// Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.

// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.

// Решение
const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,

  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      return onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      return onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance += amount;
      return onSuccess(`Account balance: ${this.balance}`);
    }
  },

  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      return onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      return onError(`Amount must be more than 0 credits`);
    } else {
      return onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

const handleSuccess = (message) => console.log(`✅ Success! ${message}`);
const handleError = (message) => console.log(`❌ Error! ${message}`);

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
