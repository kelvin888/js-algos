import { countVowels } from '.';

describe('Count Vowels', () => {
    test('should return the number of vowels in "hello"', () => {
        expect(countVowels("hello")).toBe(2);
    });

    test('should return 0 for an empty string', () => {
        expect(countVowels("")).toBe(0);
    });

    test('should return 0 for a string with no vowels', () => {
        expect(countVowels("xyz")).toBe(0);
    });

    test('should return the correct count for a string with only vowels', () => {
        expect(countVowels("aeiou")).toBe(5);
    });

    test('should ignore case sensitivity', () => {
        expect(countVowels("Hello")).toBe(2);
    });

    test('should handle special characters', () => {
        expect(countVowels("hello world!")).toBe(3);
    });

    test('should handle edge case of very long string', () => {
        const longString = "a".repeat(1000000); // One million 'a's
        expect(countVowels(longString)).toBe(1000000);
    });
});
