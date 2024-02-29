import { delayedMultiply } from '.';

describe('delayedMultiply', () => {
    test('should multiply two numbers after a delay', async () => {
        const result = await delayedMultiply(5, 3);
        expect(result).toBe(15);
    });

    test('should handle negative numbers', async () => {
        const result = await delayedMultiply(-4, 6);
        expect(result).toBe(-24);
    });

    test('should handle zero as one of the numbers', async () => {
        const result1 = await delayedMultiply(0, 10);
        expect(result1).toBe(0);

        const result2 = await delayedMultiply(7, 0);
        expect(result2).toBe(0);
    });

    test('should handle edge cases', async () => {
        const result = await delayedMultiply(Number.MAX_SAFE_INTEGER, 2);
        expect(result).toBe(Number.MAX_SAFE_INTEGER * 2);
    });
});
