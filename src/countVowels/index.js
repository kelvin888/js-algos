function countVowels(inputString) {
    let result = 0;
    const VOWELS = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < inputString.length; i++) {
        if (VOWELS.includes(inputString[i])) {
            result++;
        }
    }

    return result;
}

export { countVowels }