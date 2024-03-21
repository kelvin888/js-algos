import { maxSubarraySum } from '.';

describe('maxSubarraySum function', () => {
    test('should return the maximum sum of subarray of length k', () => {
        expect(maxSubarraySum([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)).toBe(24);
        expect(maxSubarraySum([1, 2, 3, 4, 5], 2)).toBe(9);
        expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
    });

    test('should return 0 for empty array', () => {
        expect(maxSubarraySum([], 2)).toBe(0);
    });

    test('should return 0 for k greater than array length', () => {
        expect(maxSubarraySum([1, 2, 3], 4)).toBe(0);
    });

    test('should find the maximum sum of subarrays of given length', () => {
        expect(maxSubarraySum([-1, -2, -3, -4, -5], 2)).toBe(-3);
        expect(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3], 3)).toBe(4);
    });


    test('should handle edge case where entire array is subarray', () => {
        expect(maxSubarraySum([1, 2, 3, 4, 5], 5)).toBe(15);
    });

    test('should handle large input values', () => {
        expect(maxSubarraySum(Array.from({ length: 10 ** 6 }, (_, i) => i + 1), 1000)).toBe(999500500);
    });

});
