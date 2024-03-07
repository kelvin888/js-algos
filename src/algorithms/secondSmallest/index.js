// Write a function in JavaScript that takes an array of numbers as input and returns the second smallest number in the array.
//  If the array has less than two elements, return null.

function secondSmallest(numArray) {
    if (numArray.length <= 1) return null

    let sorted = numArray.sort((a, b) => a - b)
    return sorted[1]
}

export { secondSmallest }