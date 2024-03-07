// Question:
// Write a function called largestSumSubarray that takes an array of integers as input and returns the sum of the largest contiguous subarray within the array. The function should find and return the sum of the subarray with the largest sum. If the array contains only negative integers, the function should return 0.

function largestSumSubarray(intArr) {
    if (!intArr) return 0
    if (intArr.length === 0) return 0

    let maxSum = intArr[0];
    let currSum = 0;

    for (let i = 0; i < intArr.length; i++) {

        if (currSum < 0) currSum = 0
        currSum += intArr[i]

        maxSum = Math.max(maxSum, currSum)
        if (maxSum < 0) maxSum = 0

    }
    return maxSum
}

export { largestSumSubarray }