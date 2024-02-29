import { counterWithStep } from '.';

describe('counterWithStep', () => {
    test('should create a counter with default step size', () => {
        const counter = counterWithStep();
        expect(counter.getValue()).toBe(0);
        counter.increment();
        expect(counter.getValue()).toBe(1);
        counter.increment();
        expect(counter.getValue()).toBe(2);
        counter.decrement();
        expect(counter.getValue()).toBe(1);
    });

    test('should create a counter with custom step size', () => {
        const counter = counterWithStep(5);
        expect(counter.getValue()).toBe(0);
        counter.increment();
        expect(counter.getValue()).toBe(5);
        counter.increment();
        expect(counter.getValue()).toBe(10);
        counter.decrement();
        expect(counter.getValue()).toBe(5);
    });
});
