function indexOfFirstNonRepeating(str) {
    const charCount = new Map()


    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1)
    }

    //return the index of the first one with count of one
    for (let i = 0; i < str.length; i++) {
        if (charCount.get(str[i]) === 1) {
            return i
        }
    }

    return -1
}

export { indexOfFirstNonRepeating }