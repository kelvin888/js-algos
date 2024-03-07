import { mostCommonCharacter } from '.';

describe('Most Common Character', () => {
    test('should return the most common character in "hello"', () => {
        expect(mostCommonCharacter("hello")).toMatch(/[l]/);
    });

    test('should return the most common character in "banana"', () => {
        expect(mostCommonCharacter("banana")).toMatch(/[a]/);
    });

    test('should return the most common character in "programming"', () => {
        expect(mostCommonCharacter("programming")).toMatch(/[gmr]/);
    });

    test('should return one of the most common characters in "mississippi"', () => {
        expect(mostCommonCharacter("mississippi")).toMatch(/[s|i]/);
    });

    test('should return the most common character in "aabbbccc"', () => {
        expect(mostCommonCharacter("aabbbccc")).toMatch(/[b]/);
    });

    test('should return null for an empty string', () => {
        expect(mostCommonCharacter("")).toBe(null);
    });

    test('should return the only character for a string with one character', () => {
        expect(mostCommonCharacter("a")).toBe("a");
    });

    test('should ignore spaces and return the most common character in "hello world"', () => {
        expect(mostCommonCharacter("hello world")).toMatch(/[l]/);
    });

    test('should handle special characters and return the most common character in "a!@#$%^&*()_+"', () => {
        expect(mostCommonCharacter("a!@#$%^&*()_+")).toBe("a");
    });
});
