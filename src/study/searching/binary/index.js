// Algorithm:
// Initialize two pointers, left and right, pointing to the start and end of the array, respectively.
// Repeat until left is less than or equal to right:
// Calculate the middle index as mid = (left + right) / 2.
// If the target is equal to the value at the middle index, return mid.
// If the target is less than the value at the middle index, update right = mid - 1.
// If the target is greater than the value at the middle index, update left = mid + 1.
// If the target is not found after the loop, return -1.

function binarySearch(arr, searchValue) {
    console.log(arr, searchValue)
    let searchValueIndex = -1;
    let left = 0;
    let right = arr.length - 1

    if (arr.length === 1) return 0

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        console.log("value", mid, left, right)
        if (searchValue === arr[mid]) {
            searchValueIndex = mid
            break;
        } else if (searchValue < arr[mid]) {
            right = mid - 1
        } else if (searchValue > arr[mid]) {
            left = mid + 1
        }
    }

    return searchValueIndex
}

export { binarySearch }