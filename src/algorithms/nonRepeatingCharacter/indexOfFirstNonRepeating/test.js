import { indexOfFirstNonRepeating } from "."
describe('firstNonRepeatingCharacter function', () => {
    test('String with non-repeating character at start', () => {
        expect(indexOfFirstNonRepeating('abcde')).toBe(0); // 'a' is the first non-repeating character at index 0
    });

    test('String with non-repeating character at end', () => {
        expect(indexOfFirstNonRepeating('abcdea')).toBe(1); // 'b' is the first non-repeating character at index 1
    });

    test('String with non-repeating character in middle', () => {
        expect(indexOfFirstNonRepeating('aabbCCdDeE')).toBe(6); // 'd' is the first non-repeating character at index 6
    });

    test('String with all repeating characters', () => {
        expect(indexOfFirstNonRepeating('abcabc')).toBe(-1); // All characters repeat, so expected output is -1
    });

    test('Empty string', () => {
        expect(indexOfFirstNonRepeating('')).toBe(-1); // Empty string, so expected output is -1
    });

    test('String with special characters', () => {
        expect(indexOfFirstNonRepeating('!@#$%^&*()_+=-')).toBe(0); // First non-repeating character is '!', index 0
    });
});
