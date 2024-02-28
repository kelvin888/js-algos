import { secondSmallest } from '.';

describe('Second Smallest Number', () => {
    test('should return the second smallest number in [4, 2, 1, 5]', () => {
        expect(secondSmallest([4, 2, 1, 5])).toBe(2);
    });

    test('should return null for an empty array', () => {
        expect(secondSmallest([])).toBe(null);
    });

    test('should return null for an array with only one element', () => {
        expect(secondSmallest([4])).toBe(null);
    });

    test('should return the second smallest number even if there are duplicates', () => {
        expect(secondSmallest([4, 2, 2, 1, 5])).toBe(2);
    });

    test('should handle negative numbers', () => {
        expect(secondSmallest([-1, -5, -3, -2])).toBe(-3);
    });

    test('should handle edge case of very large array', () => {
        const largeArray = Array.from({ length: 1000000 }, (_, index) => index + 1);
        expect(secondSmallest(largeArray)).toBe(2);
    });
});
