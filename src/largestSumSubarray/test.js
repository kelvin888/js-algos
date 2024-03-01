import { largestSumSubarray } from '.';

describe('largestSumSubarray', () => {
    test('should return the sum of the largest contiguous subarray', () => {
        expect(largestSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
        expect(largestSumSubarray([1, 2, 3, 4, 5])).toBe(15);
        expect(largestSumSubarray([-1, -2, -3, -4, -5])).toBe(0);
        expect(largestSumSubarray([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7);
    });

    test('should return the single element if array contains only one element', () => {
        expect(largestSumSubarray([5])).toBe(5);
        expect(largestSumSubarray([-5])).toBe(0);
        expect(largestSumSubarray([0])).toBe(0);
    });

    test('should return 0 if all elements in the array are negative', () => {
        expect(largestSumSubarray([-1, -2, -3])).toBe(0);
        expect(largestSumSubarray([-5, -10, -15, -20])).toBe(0);
    });

    test('should return 0 if all elements in the array are zeros', () => {
        expect(largestSumSubarray([0, 0, 0])).toBe(0);
        expect(largestSumSubarray([0, 0, 0, 0])).toBe(0);
    });

    test('should handle empty array', () => {
        expect(largestSumSubarray([])).toBe(0)
        expect(largestSumSubarray()).toBe(0)
    })
});
