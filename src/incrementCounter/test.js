import { counter } from '.';

describe('Counter', () => {
    test('should increment the counter each time it is invoked', () => {
        const incrementCounter = counter();
        expect(incrementCounter()).toBe(1);
        expect(incrementCounter()).toBe(2);
        expect(incrementCounter()).toBe(3);
    });

    test('should handle multiple counters independently', () => {
        const counter1 = counter();
        const counter2 = counter();

        expect(counter1()).toBe(1);
        expect(counter1()).toBe(2);

        expect(counter2()).toBe(1);
        expect(counter2()).toBe(2);
    });

    test('should handle initial counter value correctly', () => {
        const startFromFive = counter(5);
        expect(startFromFive()).toBe(6);
        expect(startFromFive()).toBe(7);
        expect(startFromFive()).toBe(8);
    });

    test('should handle negative initial counter value correctly', () => {
        const startFromNegative = counter(-10);
        expect(startFromNegative()).toBe(-9);
        expect(startFromNegative()).toBe(-8);
        expect(startFromNegative()).toBe(-7);
    });
});
