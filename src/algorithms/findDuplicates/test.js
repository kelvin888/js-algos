import { findDuplicates } from '.';

describe('findDuplicates function', () => {
    test('should return an array containing duplicate numbers', () => {
        expect(findDuplicates([1, 2, 3, 4, 2, 5, 6, 3])).toEqual([2, 3]);
        expect(findDuplicates([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
        expect(findDuplicates([1, 1, 1, 1, 1])).toEqual([1]);
    });

    test('should return an empty array if there are no duplicates', () => {
        expect(findDuplicates([1, 2, 3, 4, 5])).toEqual([]);
        expect(findDuplicates([])).toEqual([]);
        expect(findDuplicates([1, 2, 3, 4, 5, 6])).toEqual([]);
    });

    test('should handle edge cases', () => {
        expect(findDuplicates([1])).toEqual([]);
        expect(findDuplicates([1, 1])).toEqual([1]);
    });
});