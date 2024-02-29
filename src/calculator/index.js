// Create a function called calculator that returns an object with four methods: add, subtract, multiply, and divide. These methods should be used to perform basic arithmetic operations. Additionally, the calculator function should accept an optional initial value that sets the starting value of the calculator.

function calculator(initialValue = 0) {
    let result = initialValue;

    const add = function (num) {
        result += num;
        return this;
    };

    const subtract = function (num) {
        result -= num;
        return this;
    };

    const divide = function (num) {
        if (num === 0) {
            throw new Error('Cannot divide by zero');
        }
        result /= num;
        return this;
    };

    const multiply = function (num) {
        result *= num;
        return this;
    };

    const getResult = function () {
        return result;
    };

    return { add, subtract, divide, multiply, result: getResult };
}

export { calculator };

