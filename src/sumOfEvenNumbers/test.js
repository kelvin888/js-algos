import { sumOfEvenNumbers } from '.';

describe('Sum of Even Numbers', () => {
    test('should return the sum of even numbers in [1, 2, 3, 4, 5]', () => {
        expect(sumOfEvenNumbers([1, 2, 3, 4, 5])).toBe(6);
    });

    test('should return 0 for an empty array', () => {
        expect(sumOfEvenNumbers([])).toBe(0);
    });

    test('should return 0 for an array with no even numbers', () => {
        expect(sumOfEvenNumbers([1, 3, 5])).toBe(0);
    });

    test('should return the sum of even numbers even if there are negative numbers', () => {
        expect(sumOfEvenNumbers([-2, -1, 0, 1, 2])).toBe(0);
    });

    test('should handle edge case of very large array', () => {
        const largeArray = Array.from({ length: 1000000 }, (_, index) => index + 1);
        expect(sumOfEvenNumbers(largeArray)).toBe(250000500000);
    });
});
