import { maximumDifference } from '.';

describe('Maximum Difference', () => {
    test('should return 4 for the array [7, 2, 3, 10, 2]', () => {
        expect(maximumDifference([7, 2, 3, 10, 2])).toBe(8);
    });

    test('should return 0 for an empty array', () => {
        expect(maximumDifference([])).toBe(0);
    });

    test('should return 0 for an array with only one element', () => {
        expect(maximumDifference([4])).toBe(0);
    });

    test('should return 5 for the array [10, 5]', () => {
        expect(maximumDifference([10, 5])).toBe(5);
    });

    test('should return 0 for an array with identical elements', () => {
        expect(maximumDifference([3, 3, 3, 3, 3])).toBe(0);
    });

    test('should return 999999 for the array [1, 1000000]', () => {
        expect(maximumDifference([1, 1000000])).toBe(999999);
    });

    test('should return 0 for an array with all elements being 0', () => {
        expect(maximumDifference([0, 0, 0, 0])).toBe(0);
    });

    test('should handle negative numbers and return 4 for the array [-1, -5, -3, -2]', () => {
        expect(maximumDifference([-1, -5, -3, -2])).toBe(4);
    });

    test('should handle arrays with identical elements, including negative numbers, and return 0 for the array [-3, -3, -3, -3, -3]', () => {
        expect(maximumDifference([-3, -3, -3, -3, -3])).toBe(0);
    });

    test('should handle edge case of very large array', () => {
        const largeArray = Array.from({ length: 1000000 }, (_, index) => index + 1);
        expect(maximumDifference(largeArray)).toBe(999999);
    });
});
