import { reverseWords } from '.';

describe('Reverse Words', () => {
    test('should reverse each word in the string "hello world"', () => {
        expect(reverseWords("hello world")).toBe("olleh dlrow");
    });

    test('should reverse each word in the string "javascript is awesome"', () => {
        expect(reverseWords("javascript is awesome")).toBe("tpircsavaj si emosewa");
    });

    test('should handle a single word in the string', () => {
        expect(reverseWords("hello")).toBe("olleh");
    });

    test('should handle an empty string', () => {
        expect(reverseWords("")).toBe("");
    });

    test('should handle a string with only spaces', () => {
        expect(reverseWords("   ")).toBe("   ");
    });

    test('should handle special characters and punctuation', () => {
        expect(reverseWords("hello! world,")).toBe("!olleh ,dlrow");
    });

    test('should handle edge case of very long string', () => {
        const longString = "a".repeat(1000000); // One million 'a's
        expect(reverseWords(longString)).toBe(longString.split("").reverse().join(""));
    });
});
