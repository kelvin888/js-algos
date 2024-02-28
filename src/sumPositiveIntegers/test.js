import { sumPositiveIntegers } from '.';

describe('Sum of Positive Integers', () => {
    test('should return 0 for an empty array', () => {
        expect(sumPositiveIntegers([])).toBe(0);
    });

    test('should return 0 when no positive integers are present', () => {
        expect(sumPositiveIntegers([-1, -2, -3])).toBe(0);
    });

    test('should return the sum of positive integers when they are present', () => {
        expect(sumPositiveIntegers([1, 2, 3])).toBe(6);
    });

    test('should handle array with mixed positive and negative integers', () => {
        expect(sumPositiveIntegers([-1, 2, -3, 4])).toBe(6);
    });

    test('should handle array with positive integers including zero', () => {
        expect(sumPositiveIntegers([0, 1, 2, 3])).toBe(6);
    });
});
