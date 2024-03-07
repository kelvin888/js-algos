import { maxProfit } from '.';

describe('maxProfit', () => {
    test('should return the maximum profit that can be achieved', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
        expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });

    test('should return 0 for an empty array', () => {
        expect(maxProfit([])).toBe(0);
    });

    test('should return 0 for a single-element array', () => {
        expect(maxProfit([7])).toBe(0);
    });

});
