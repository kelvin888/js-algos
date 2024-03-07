function mostCommonCharacter(inputString) {

    if (inputString.length === 0) return null

    let cleanedStr = inputString.replace(/[^A-Za-z]/g, "")
    let characterArr = cleanedStr.split("")
    let characterCountMap = {}

    for (let i = 0; i < characterArr.length; i++) {
        //if it exists in character map, increase by one
        if (characterCountMap.hasOwnProperty(characterArr[i])) {
            characterCountMap[characterArr[i]] += 1
        } else {
            //else, add it to map
            characterCountMap[characterArr[i]] = 1
        }
    }

    let mostCommonChar = ''
    let mostCommonCharCount = 0;
    for (let character in characterCountMap) {
        if (characterCountMap[character] > mostCommonCharCount) {
            mostCommonCharCount = Math.max(mostCommonCharCount, characterCountMap[character])
            mostCommonChar = character
        }
    }

    return mostCommonChar
}
export { mostCommonCharacter }