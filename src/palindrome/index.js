function isPalindrome(str) {
    let result = true;
    const strArr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase().split("");
    const strLen = strArr.length;

    for (let i = 0; i < Math.floor(strLen / 2); i++) {
        //two pointers
        if (strArr[i] !== strArr[strLen - i - 1]) {
            result = false
        }
    }
    return result;
}

export { isPalindrome }