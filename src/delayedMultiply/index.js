
/*
Question:
Create a function called delayedMultiply that takes two parameters: num1 and num2. This function should return a promise that resolves to the result of multiplying num1 and num2. However, there's a twist: the multiplication should only occur after a delay of 1 second.
*/

function delayedMultiply(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1 * num2)
        }, 1000);
    })
}

export { delayedMultiply }