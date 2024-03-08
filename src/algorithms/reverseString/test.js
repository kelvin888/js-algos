import { reverseString } from '.';

describe('reverseString', () => {
    // Basic functionality test
    test('Reverses a string with multiple characters', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    // Edge case: Empty string
    test('Reverses an empty string', () => {
        expect(reverseString('')).toBe('');
    });

    // Edge case: String with a single character
    test('Reverses a string with a single character', () => {
        expect(reverseString('a')).toBe('a');
    });

    // Edge case: String with special characters
    test('Reverses a string with special characters', () => {
        expect(reverseString('!@#$%^&*()')).toBe(')(*&^%$#@!');
    });

    // Edge case: String with whitespace only
    test('Reverses a string with whitespace only', () => {
        expect(reverseString('   ')).toBe('   ');
    });

    // Edge case: String with leading/trailing whitespace
    test('Reverses a string with leading/trailing whitespace', () => {
        expect(reverseString('  hello  ')).toBe('  olleh  ');
    });

    // Edge case: String with emojis
    test('Reverses a string with emojis', () => {
        expect(reverseString('hello 😀👍😡')).toBe('😡👍😀 olleh');
    });

    // Edge case: String with symbols
    test('Reverses a string with symbols', () => {
        expect(reverseString('hello!@#')).toBe('#@!olleh');
    });
});
