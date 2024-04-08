function linearSearch(arr, searchValue) {
    let searchValueIndex = -1;
    // Iterate through each element in the array.
    for (let i = 0; i < arr.length; i++) {
        // For each element, check if it matches the target value.
        if (arr[i] === searchValue) {
            // If the element matches the target value, return its index.
            searchValueIndex = i
        }
    }

    return searchValueIndex
}

export { linearSearch }