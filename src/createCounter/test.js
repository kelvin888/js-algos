import { createCounter } from '.';

describe('createCounter', () => {
    test('should increment and decrement the counter', () => {
        const counter = createCounter();
        expect(counter.getCounter()).toBe(0);
        counter.increment();
        expect(counter.getCounter()).toBe(1);
        counter.increment();
        expect(counter.getCounter()).toBe(2);
        counter.decrement();
        expect(counter.getCounter()).toBe(1);
        counter.decrement();
        expect(counter.getCounter()).toBe(0);
    });

    test('should handle negative numbers', () => {
        const counter = createCounter();
        counter.increment();
        counter.increment();
        counter.decrement();
        counter.decrement();
        expect(counter.getCounter()).toBe(0);
        counter.decrement();
        expect(counter.getCounter()).toBe(-1);
    });

    test('should handle edge cases', () => {
        const counter = createCounter();
        counter.increment();
        counter.decrement();
        counter.increment();
        counter.increment();
        expect(counter.getCounter()).toBe(2);
        counter.increment();
        expect(counter.getCounter()).toBe(3);
    });
});
