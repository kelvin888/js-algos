function reverseString(inputString) {
    // Split the string into an array of characters
    const characters = inputString.split('');

    // Iterate through the array of characters
    for (let i = 0; i < characters.length; i++) {
        // Check if the character is part of a surrogate pair
        if (characters[i].charCodeAt(0) >= 0xd800 && characters[i].charCodeAt(0) <= 0xdbff) {
            // Swap the order of surrogate pairs
            const temp = characters[i];
            characters[i] = characters[i + 1];
            characters[i + 1] = temp;
            i++; // Increment i again to skip the next character (second part of surrogate pair)
        }
    }

    // Reverse the array of characters and join them back into a string
    const reversedString = characters.reverse().join('');

    return reversedString;
}

export { reverseString };