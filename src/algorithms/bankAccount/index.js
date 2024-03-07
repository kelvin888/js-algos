// Question:
// Create a JavaScript class called BankAccount to represent a simple bank account. The class should have the following properties and methods:

// Properties: accountNumber (string), accountHolder (string), balance (number)
// Methods:
// deposit(amount): Accepts a number representing the amount to deposit. Increases the balance by the given amount.
// withdraw(amount): Accepts a number representing the amount to withdraw. Decreases the balance by the given amount. Ensure that the balance cannot go below 0.
// getBalance(): Returns the current balance of the account.

class BankAccount {
    accountNumber;
    accountHolder;
    balance = 0;

    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = Math.max(0, balance);
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance = Math.max(0, this.balance - amount);
    }

    getBalance() {
        return this.balance;
    }
}

export { BankAccount };
