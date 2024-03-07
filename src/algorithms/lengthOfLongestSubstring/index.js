
// Problem: Find the Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// For example:

// Input: "abcabcbb"

// Output: 3(The longest substring without repeating characters is "abc", which has a length of 3.)
// Input: "bbbbb"

// Output: 1(The longest substring without repeating characters is "b", which has a length of 1.)
// Input: "pwwkew"

// Output: 3(The longest substring without repeating characters is "wke", which has a length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.)

function lengthOfLongestSubstring(inputStr) {
    let longestSubStr = 0
    let nonRepeatingArr = []
    for (let i = 0; i < inputStr.length; i++) {
        if (nonRepeatingArr.includes(inputStr[i])) {
            nonRepeatingArr = [inputStr[i]]
        } else {
            nonRepeatingArr.push(inputStr[i])
        }
        longestSubStr = Math.max(longestSubStr, nonRepeatingArr.length)

    }


    return longestSubStr
}
export { lengthOfLongestSubstring }