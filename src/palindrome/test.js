import { isPalindrome } from '.';

describe('Palindrome Tests', () => {
    test('Test "abba" is a palindrome', () => {
        expect(isPalindrome("abba")).toBe(true);
    });

    test('Test "race car" is a palindrome', () => {
        expect(isPalindrome('race car')).toBe(true);
    });

    test('Test "A man, a plan, a canal. Panama" is a palindrome', () => {
        expect(isPalindrome('A man, a plan, a canal. Panama')).toBe(true);
    });

    test('Test "never odd or even" is a palindrome', () => {
        expect(isPalindrome('never odd or even')).toBe(true);
    });

    test('Test "My age is 0, 0 si ega ym" is a palindrome', () => {
        expect(isPalindrome('My age is 0, 0 si ega ym')).toBe(true);
    });

    test('Test "0_0 (: /-\ :) 0–0" is a palindrome', () => {
        expect(isPalindrome('0_0 (: /-\ :) 0–0')).toBe(true);
    });

    test('Test "not a palindrome" is not a palindrome', () => {
        expect(isPalindrome('not a palindrome')).toBe(false);
    });

    test('Test "nope" is not a palindrome', () => {
        expect(isPalindrome('nope')).toBe(false);
    });

    test('Test "almostomla" is not a palindrome', () => {
        expect(isPalindrome('almostomla')).toBe(false);
    });

    test('Test "1 eye for of 1 eye." is not a palindrome', () => {
        expect(isPalindrome('1 eye for of 1 eye.')).toBe(false);
    });
});
