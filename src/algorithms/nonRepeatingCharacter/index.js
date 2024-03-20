
function firstNonRepeatingCharacter(str) {
    str = str.toLowerCase(); // Convert the string to lowercase

    const charCount = {}; // Object to store character counts

    // Iterate through the string to count character occurrences
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1; // Increment character count
    }

    // Find the first character in the string that has a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character is found
}



export { firstNonRepeatingCharacter }