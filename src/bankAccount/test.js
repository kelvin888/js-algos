import { BankAccount } from '.';

describe('BankAccount', () => {
    let account;

    beforeEach(() => {
        account = new BankAccount("123456789", "John Doe", 1000);
    });

    test('should have correct initial properties', () => {
        expect(account.accountNumber).toBe("123456789");
        expect(account.accountHolder).toBe("John Doe");
        expect(account.balance).toBe(1000);
    });

    test('should deposit amount correctly', () => {
        account.deposit(500);
        expect(account.balance).toBe(1500);
    });

    test('should withdraw amount correctly', () => {
        account.withdraw(500);
        expect(account.balance).toBe(500);
    });

    test('should not allow balance to go below 0 when withdrawing', () => {
        account.withdraw(2000);
        expect(account.balance).toBe(0);
    });

    test('should get current balance correctly', () => {
        expect(account.getBalance()).toBe(1000);
    });

    test('should handle negative initial balance', () => {
        const negativeBalanceAccount = new BankAccount("987654321", "Jane Doe", -500);
        expect(negativeBalanceAccount.balance).toBe(0); // Balance should be set to 0
    });

    test('should handle edge case of very large balance', () => {
        const largeBalanceAccount = new BankAccount("111222333", "Alice Smith", 1000000000);
        expect(largeBalanceAccount.balance).toBe(1000000000);
    });
});
