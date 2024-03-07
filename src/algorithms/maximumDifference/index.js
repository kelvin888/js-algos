// Write a function in JavaScript that takes an array of integers as input and returns the maximum difference between any two elements in the array. 
// If the array has fewer than two elements, return 0.

function maximumDifference(intArray) {
    if (intArray.length === 0) return 0;

    let maxDifference = 0;
    let minElement = intArray[0];

    for (let i = 1; i < intArray.length; i++) {
        let currentDiff = Math.abs(intArray[i] - minElement);
        maxDifference = Math.max(maxDifference, currentDiff);
        minElement = Math.min(minElement, intArray[i]);
    }

    return maxDifference;
}

export { maximumDifference };
