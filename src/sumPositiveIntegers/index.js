// Write a function in JavaScript that takes an array of integers as input and returns the sum of all positive integers in the array.

function sumPositiveIntegers(intArr) {
    let result = 0;
    if (intArr.length === 0) return 0

    for (let i = 0; i < intArr.length; i++) {
        if (intArr[i] > 0) {
            result += intArr[i]
        }
    }
    return result
}

export { sumPositiveIntegers }