import { InstanceCounter } from '.';

describe('InstanceCounter', () => {
    beforeEach(() => {
        InstanceCounter.count = 0;
    });

    it('should return the number of instances created', () => {
        for (let i = 1; i <= 5; i++) {
            new InstanceCounter();
            expect(InstanceCounter.getInstanceCount()).toBe(i);
        }
    });

    it('should handle multiple instances', () => {
        for (let i = 1; i <= 12; i++) {
            new InstanceCounter();
            expect(InstanceCounter.getInstanceCount()).toBe(i);
        }
    });
});
