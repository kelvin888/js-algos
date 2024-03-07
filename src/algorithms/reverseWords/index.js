// Write a function in JavaScript that takes a string as input and returns a new string where each word in the input string is reversed.

function reverseWords(inputStr) {
    let result = "";
    let wordsArr = inputStr.split(" ");

    for (let i = 0; i < wordsArr.length; i++) {
        let reversedWord = wordsArr[i].split("").reverse().join("");
        result = result.concat(reversedWord)
        if (i < wordsArr.length - 1) {
            result = result.concat(" ");
        }
    }
    return result;
}

export { reverseWords }