import { calculator } from "."

describe('calculator', () => {
    test('should perform addition', () => {
        const calc = calculator();
        expect(calc.add(5).add(3).result()).toBe(8);
        expect(calc.add(10).result()).toBe(18);
    });

    test('should perform subtraction', () => {
        const calc = calculator();
        expect(calc.subtract(5).subtract(3).result()).toBe(-8);
        expect(calc.subtract(10).result()).toBe(-18);
    });

    test('should perform multiplication', () => {
        const calc = calculator();
        expect(calc.add(5).multiply(3).result()).toBe(15);
        expect(calc.multiply(2).result()).toBe(30);
    });

    test('should perform division', () => {
        const calc = calculator();
        expect(calc.add(15).divide(3).result()).toBe(5);
        expect(calc.divide(2).result()).toBe(2.5);
    });

    test('should handle initial value', () => {
        const calc = calculator(10);
        expect(calc.add(5).result()).toBe(15);
        expect(calc.subtract(3).result()).toBe(12);
    });
});
