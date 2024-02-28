// Write a function in JavaScript that takes an array of integers as input and returns the sum of all even numbers in the array.
function sumOfEvenNumbers(intArr) {
    let result = 0;

    //even if num % 2 === 0
    for (let i = 0; i < intArr.length; i++) {
        if (intArr[i] % 2 === 0) {
            result += intArr[i]
        }
    }

    return result
}

export { sumOfEvenNumbers }