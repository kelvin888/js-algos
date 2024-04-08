import { linearSearch } from '.';

describe('Linear Search', () => {
    // Test Case 1: Target found in the middle of the array
    it('should return the correct index when target is found in the middle', () => {
        expect(linearSearch([1, 3, 5, 7, 9], 5)).toBe(2);
    });

    // Test Case 2: Target found at the beginning of the array
    it('should return the correct index when target is found at the beginning', () => {
        expect(linearSearch([2, 4, 6, 8, 10], 2)).toBe(0);
    });

    // Test Case 3: Target found at the end of the array
    it('should return the correct index when target is found at the end', () => {
        expect(linearSearch([11, 13, 15, 17, 19], 19)).toBe(4);
    });

    // Test Case 4: Target not found in the array
    it('should return -1 when target is not found in the array', () => {
        expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    });

    // Test Case 5: Empty array
    it('should return -1 when array is empty', () => {
        expect(linearSearch([], 1)).toBe(-1);
    });

    // Test Case 6: Target is the only element in the array
    it('should return 0 when target is the only element in the array', () => {
        expect(linearSearch([42], 42)).toBe(0);
    });
});

