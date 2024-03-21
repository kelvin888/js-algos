function maxSubarraySum(arr, k) {
    // Edge cases
    if (arr.length === 0 || k > arr.length) return 0;

    let currentSum = 0;
    // Sum the first k elements
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }

    let maxSum = currentSum;

    // Start moving the window and comparing current sum to max
    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum - arr[i - k] + arr[i];
        maxSum = Math.max(currentSum, maxSum);
        // // Ensure currentSum is at least 0
        // currentSum = Math.max(currentSum, 0);
    }
    return maxSum;
}

export { maxSubarraySum }