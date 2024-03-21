import { rotateArray } from '.';

describe('rotateArray function', () => {
    test('should rotate array to the right by k steps', () => {
        expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
        expect(rotateArray([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5, 1, 2]);
        expect(rotateArray([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
        expect(rotateArray([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
    });

    test('should return empty array if input array is empty', () => {
        expect(rotateArray([], 5)).toEqual([]);
    });

    test('should return the same array if k is zero', () => {
        expect(rotateArray([1], 0)).toEqual([1]);
        expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });

    test('should rotate beyond array length', () => {
        expect(rotateArray([1, 2, 3], 7)).toEqual([3, 1, 2]);
    });

    test('should rotate to the left for negative k', () => {
        expect(rotateArray([1, 2, 3], -1)).toEqual([2, 3, 1]);
    });

    test('should return the original array for large k values', () => {
        expect(rotateArray([1, 2, 3], 100000)).toEqual([3, 1, 2]);
    });

});
