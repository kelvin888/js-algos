import { firstNonRepeatingCharacter } from '.';

describe('firstNonRepeatingCharacter', () => {
    test('String with a single non-repeating character', () => {
        expect(firstNonRepeatingCharacter('a')).toBe('a');
    });

    test('String with multiple non-repeating characters', () => {
        expect(firstNonRepeatingCharacter('abcde')).toBe('a');
    });

    test('String with repeating characters', () => {
        expect(firstNonRepeatingCharacter('aabBcc')).toBe(null);
    });

    test('String with repeating characters and non-repeating characters', () => {
        expect(firstNonRepeatingCharacter('aabbcdef')).toBe('c');
    });

    test('String with all repeating characters', () => {
        expect(firstNonRepeatingCharacter('aaaa')).toBe(null);
    });

    test('Empty string', () => {
        expect(firstNonRepeatingCharacter('')).toBe(null);
    });

    test('String with only whitespaces', () => {
        expect(firstNonRepeatingCharacter('   ')).toBe(null);
    });

    test('String with mixed case', () => {
        expect(firstNonRepeatingCharacter('aabbCCdDeE')).toBe(null);
    });

    test('String with special characters', () => {
        expect(firstNonRepeatingCharacter('!@#$%^&*()_+=-')).toBe('!');
    });

    test('String with alphanumeric characters', () => {
        expect(firstNonRepeatingCharacter('a1b2c3d4e5')).toBe('a');
    });
});
