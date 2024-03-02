import { lengthOfLongestSubstring } from '.';

test('Test case 1: "abcabcbb"', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test('Test case 2: "bbbbb"', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test('Test case 3: "pwwkew"', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test('Edge case 1: Empty string', () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
});

test('Edge case 2: Single character', () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
});

test('Edge case 3: All unique characters', () => {
    expect(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz")).toBe(26);
});

test('Negative case 1: All spaces', () => {
    expect(lengthOfLongestSubstring("   ")).toBe(1);
});

test('Negative case 2: Special characters', () => {
    expect(lengthOfLongestSubstring("!@#$%^&*()")).toBe(10);
});

test('Complex case 1: Mix of uppercase and lowercase characters', () => {
    expect(lengthOfLongestSubstring("AbCdeFgHiJkL")).toBe(12);
});

test('Complex case 2: Mix of letters, digits, and special characters', () => {
    expect(lengthOfLongestSubstring("a1b2c3!@#")).toBe(9);
});

